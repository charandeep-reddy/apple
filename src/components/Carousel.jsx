function Carousel({ children }) {
  return (
    <div className="w-full overflow-x-auto scroll-smooth scrollbar-hide snap-x py-4 antialiased">
      <div className="flex gap-5 justify-center w-max">
        <div className="w-[calc(17vw-155px)] snap-end" aria-hidden="true"></div>
        {children}
        <div className="w-[calc(17vw-155px)] snap-end" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default Carousel;
