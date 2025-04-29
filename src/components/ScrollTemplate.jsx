function ScrollTemplate({ children }) {
  return (
    <div className="w-full overflow-x-auto scroll-smooth scrollbar-hide snap-x py-4">
      <div className="flex gap-5 items-stretch justify-center w-max">
        <div className="w-[calc(17vw-155px)] snap-end" aria-hidden="true"></div>
        {children}
        <div className="w-[calc(17vw-155px)] snap-end" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default ScrollTemplate;
