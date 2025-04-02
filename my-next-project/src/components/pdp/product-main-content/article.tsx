const Article = () => {
  return (
    <section className="border-solid pdp-article overflow-hidden space-y-8">
      <h2 className="font-bold h-[98px] leading-[98px] text-[26px] lg:text-[28px] border-t-[1px] border-solid border-[#eee]">
        Featured Articles
      </h2>
      <div className="flex gap-4">
        <a
          className="block text-sm cursor-pointer md:text-base article-item"
          href="/riffs/news/guitar-center-she-is-the-music-women-on-record-event-recap"
        >
          <img
            alt="Guitar Center and She Is The Music Host Women on Record Event"
            src="https://static.guitarcenter.com/riffs/binaries/content/gallery/guitarcenter/guitar_center_and_she_is_the_music_host_women_on_record_event_header.jpg"
          />
          <p className="mt-2">Guitar Center and She Is The Music Host Women on Record Event</p>
        </a>
        <a
          className="block text-sm cursor-pointer md:text-base article-item"
          href="/riffs/buying-guides/guitars/top-10-electric-guitars-for-jazz-buying-guide"
        >
          <img
            alt="Top 10 Electric Guitars for Jazz"
            src="https://static.guitarcenter.com/riffs/binaries/content/gallery/guitarcenter/top_10_guitars_for_jazz_header.jpg"
          />
          <p className="mt-2">Top 10 Electric Guitars for Jazz</p>
        </a>

        <a
          className="block text-sm cursor-pointer md:text-base article-item"
          href="/riffs/news/guitars/celebrating-fender-strat-freaky-rob-ari-oneal"
        >
          <img
            alt="Celebrating the Fender Strat with Freaky Rob & Ari O'Neal"
            src="https://static.guitarcenter.com/riffs/binaries/content/gallery/guitarcenter/freaky_rob_ari_oneal_gc_hwd_event_recap_header.jpg"
          />
          <p className="mt-2">Celebrating the Fender Strat with Freaky Rob &amp; Ari O'Neal</p>
        </a>

        <a
          className="block text-sm cursor-pointer md:text-base article-item"
          href="/riffs/gear-tips/recording/3-ways-to-get-pro-sound-in-your-home-studio-gear-tip"
        >
          <img
            alt="3 Ways to Get Pro Sound in Your Home Studio"
            src="https://static.guitarcenter.com/riffs/binaries/content/gallery/guitarcenter/3_ways_to_get_pro_sound_in_your_home_studio_head.jpg"
          />
          <p className="mt-2">3 Ways to Get Pro Sound in Your Home Studio</p>
        </a>
      </div>
    </section>
  );
};

export default Article;
