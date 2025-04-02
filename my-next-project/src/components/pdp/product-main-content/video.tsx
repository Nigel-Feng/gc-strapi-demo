const Video = () => {
  return (
    <div className="mt-20 mb-8 pdp-video">
      <div className="flex items-center mb-8">
        <h2 className="flex relative justify-between font-bold  text-[26px] lg:text-[28px]">
          Videos ({/* */}3{/* */})
        </h2>
        <a className="ml-auto text-base items-center text-primaryColor font-normal flex md:hidden">
          View All
          <img
            alt="arrow icon"
            loading="lazy"
            width={20}
            height={20}
            decoding="async"
            data-nimg={1}
            className="ml-1"
            style={{ color: "transparent" }}
            src="https://www.guitarcenter.com/assets/icons/pdp/arrow-right-red.svg"
          />
        </a>
      </div>
      <div className="flex items-start gap-5">
        <div className="video-item relative w-full md:w-1/4">
          <div
            aria-label="NEW Taylor Gold Label Series Guitars | NAMM 2025"
            tabIndex={0}
            className="relative mb-2 w-full aspect-video video-cover"
          >
            <img
              alt="NEW Taylor Gold Label Series Guitars | NAMM 2025"
              src="https://static.guitarcenter.com/riffs/binaries/content/gallery/guitarcenter/freaky_rob_ari_oneal_gc_hwd_event_recap_header.jpg"
            />
            <img
              src="https://www.guitarcenter.com/assets/images/pdp/play.svg"
              className="w-12 h-12 cursor-pointer play-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="play button"
            />
          </div>
          <p className="text-sm video-desc font-normal">NEW Taylor Gold Label Series Guitars | NAMM 2025</p>
        </div>
        <div className="video-item relative w-full md:w-1/4 element-hidden md:block">
          <div
            aria-label="Discover the Taylor Guitars Gold Label Collection"
            tabIndex={0}
            className="relative mb-2 w-full aspect-video video-cover"
          >
            <img
              alt="Discover the Taylor Guitars Gold Label Collection"
              src="https://static.guitarcenter.com/riffs/binaries/content/gallery/guitarcenter/top_10_guitars_for_jazz_header.jpg"
            />
            <img
              src="https://www.guitarcenter.com/assets/images/pdp/play.svg"
              className="w-12 h-12 cursor-pointer play-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="play button"
            />
          </div>
          <p className="text-sm video-desc font-normal">Discover the Taylor Guitars Gold Label Collection</p>
        </div>
        <div className="video-item relative w-full md:w-1/4 element-hidden md:block">
          <div
            aria-label="The Gold Label Collection: Taylor Guitars Born With an Old Soul"
            tabIndex={0}
            className="relative mb-2 w-full aspect-video video-cover"
          >
            <img
              alt="The Gold Label Collection: Taylor Guitars Born With an Old Soul"
              src="https://static.guitarcenter.com/riffs/binaries/content/gallery/guitarcenter/guitar_center_and_she_is_the_music_host_women_on_record_event_header.jpg"
            />
            <img
              src="https://www.guitarcenter.com/assets/images/pdp/play.svg"
              className="w-12 h-12 cursor-pointer play-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="play button"
            />
          </div>
          <p className="text-sm video-desc font-normal">
            The Gold Label Collection: Taylor Guitars Born With an Old Soul
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
