import type { Sketch } from "@p5-wrapper/react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { profile } from "../data/profile";

type Dot = {
  x: number;
  y: number;
  baseY: number;
  speed: number;
  size: number;
};

const dotFlowSketch: Sketch = (p) => {
  let dots: Dot[] = [];

  p.setup = () => {
    const canvasWidth = p.windowWidth;
    const canvasHeight = 260;
    p.createCanvas(canvasWidth, canvasHeight);
    p.noStroke();

    const dotCount = 80;
    for (let index = 0; index < dotCount; index++) {
      const x = p.random(canvasWidth);
      const baseY = p.random(canvasHeight);
      const speed = p.random(0.3, 1.0) * (p.random() > 0.5 ? 1 : -1);
      const size = p.random(3, 7);
      dots.push({ x, y: baseY, baseY, speed, size });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, 260);
  };

  p.draw = () => {
    p.clear();
    p.background(245, 245, 247, 210);

    p.fill(30, 41, 59, 120);
    const time = p.millis() * 0.001;

    dots = dots.map((dot) => {
      let nextX = dot.x + dot.speed;
      if (nextX > p.width + 20) nextX = -20;
      if (nextX < -20) nextX = p.width + 20;

      const nextY = dot.baseY + p.sin(time * 1.5 + dot.baseY * 0.02) * 8;
      return { ...dot, x: nextX, y: nextY };
    });

    dots.forEach((dot) => {
      p.circle(dot.x, dot.y, dot.size);
    });
  };
};

export function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-8 pt-16 pb-12 md:flex-row"
    >
      <div className="flex-1 space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Industrial Design · Interactive Systems
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {profile.name}
        </h1>
        <p className="text-sm font-medium text-gray-700 md:text-base">
          {profile.roleLine}
        </p>
        <div className="space-y-2 text-sm leading-relaxed text-gray-700 md:text-base">
          {profile.intro.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <a
            href="#projects"
            className="rounded-full bg-ink px-4 py-2 text-sm text-white shadow-sm"
          >
            대표 프로젝트 보기
          </a>
          <a
            href="#archive"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-800"
          >
            수업 아카이브로
          </a>
        </div>
      </div>

      <div className="w-full flex-1 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
        <ReactP5Wrapper sketch={dotFlowSketch} />
      </div>
    </section>
  );
}
