import Image from "next/image";

export function HeroSection() {
  return (
    <div className="bg-primary text-white p-6 w-full flex flex-col items-center justify-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-2">
        Meme Dashboard{" "}
        <Image
          src="/pepe.png"
          alt="Pepe"
          width={52}
          height={28}
          className="w-[26px] h-[14px] md:w-[52px] md:h-[28px]"
        />
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
        Добро пожаловать в мир где каждый мем имеет свой вклад в историю!
      </p>
    </div>
  );
}
