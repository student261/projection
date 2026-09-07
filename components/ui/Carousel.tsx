"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import './Carousel.css';

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 48;
const SPRING_OPTIONS = { type: 'spring' as const, mass: 1, stiffness: 60, damping: 18 };

export interface CarouselItemData {
  id: string | number;
  title: string;
  description: string;
  icon: React.ReactNode;
  cta?: string;
  href?: string;
}

interface CarouselItemProps {
  item: CarouselItemData;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [
    -(index + 2) * trackItemOffset,
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
    -(index - 2) * trackItemOffset
  ];
  
  const rotateY = useTransform(x, range, [45, 25, 0, -25, -45], { clamp: true });
  const z = useTransform(x, range, [-400, -150, 0, -150, -400], { clamp: true });
  const scale = useTransform(x, range, [0.65, 0.85, 1, 0.85, 0.65], { clamp: true });
  const opacity = useTransform(x, range, [0.2, 0.6, 1, 0.6, 0.2], { clamp: true });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`carousel-item ${round ? 'round' : ''} group p-8 flex flex-col text-left`}
      whileHover={{ y: -8 }}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY,
        z,
        scale,
        opacity,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div className="w-16 h-16 rounded-2xl bg-[#F5EFE6] text-black flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
        {item.icon}
      </div>

      <h3 className="text-black mb-3 transition-colors">
        {item.title}
      </h3>
      
      <p className="text-sm text-black/60 font-light leading-relaxed mb-6 flex-grow">
        {item.description}
      </p>
        
      {item.cta && item.href && (
        <Link
          href={item.href}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-black/70 transition-colors mt-auto"
        >
          <span>{item.cta.replace(' →', '')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </motion.div>
  );
}

interface CarouselProps {
  items: CarouselItemData[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

export default function Carousel({
  items = [],
  baseWidth = 320,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    if (items.length < 3) return items; // Fallback
    return [
      items[items.length - 2],
      items[items.length - 1],
      ...items,
      items[0],
      items[1]
    ];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 2 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 2 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    
    // With 2 clones on each side:
    // Real items are indices 2 to items.length + 1
    if (position >= items.length + 2) {
      setIsJumping(true);
      const target = position - items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position <= 1) {
      setIsJumping(true);
      const target = position + items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_: any, info: any) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 2 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''} mx-auto`}
      style={{
        width: "100%",
        maxWidth: "100%",
        ...(round && { height: `${baseWidth}px`, borderRadius: '50%' })
      }}
    >
      <div className="flex justify-center w-full overflow-visible">
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      </div>
      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.button
              type="button"
              key={index}
              className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 2 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
