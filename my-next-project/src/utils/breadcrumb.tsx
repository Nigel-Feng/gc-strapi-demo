const Breadcrumb = () => {
  return (
    <div className="breadcrumb flex justify-start">
      <ol className="breadcrumb-list flex overflow-hidden">
        <li className="breadcrumb-list-item inline-block group overflow-hidden text-ellipsis whitespace-nowrap max-md:hidden first:inline-block last:inline-block flex-auto first:flex-none last:basis-full">
          <a href="/" className="breadcrumb-item-content text-sm text-textNormalColor font-normal group-last:font-bold">
            Home
          </a>
        </li>
        <li className="breadcrumb-list-item inline-block group overflow-hidden text-ellipsis whitespace-nowrap max-md:hidden first:inline-block last:inline-block flex-auto first:flex-none last:basis-full">
          <span className="inline-block flex-none h-[6px] w-[6px] rounded-full mx-2 bg-[#000] align-[2px]" />
          <a
            href="/Platinum/Guitars.gc"
            className="breadcrumb-item-content text-sm text-textNormalColor font-normal group-last:font-bold"
          >
            Platinum Guitars
          </a>
        </li>
        <li className="breadcrumb-list-item inline-block group overflow-hidden text-ellipsis whitespace-nowrap max-md:hidden first:inline-block last:inline-block flex-auto first:flex-none last:basis-full">
          <span className="inline-block flex-none h-[6px] w-[6px] rounded-full mx-2 bg-[#000] align-[2px]" />
          <a
            href="/Platinum/Acoustic-Guitars.gc"
            className="breadcrumb-item-content text-sm text-textNormalColor font-normal group-last:font-bold"
          >
            Platinum Acoustic Guitars
          </a>
        </li>
        <li className="breadcrumb-list-item inline-block group overflow-hidden text-ellipsis whitespace-nowrap max-md:hidden first:inline-block last:inline-block flex-auto first:flex-none last:basis-full">
          <span className="inline-block flex-none h-[6px] w-[6px] rounded-full mx-2 bg-[#000] align-[2px]" />
          <a
            href="/Platinum/6-String-Acoustic-Guitars.gc"
            className="breadcrumb-item-content text-sm text-textNormalColor font-normal group-last:font-bold"
          >
            Platinum 6 String Acoustic Guitars
          </a>
        </li>
        <li className="breadcrumb-list-item inline-block group overflow-hidden text-ellipsis whitespace-nowrap max-md:hidden first:inline-block last:inline-block flex-auto first:flex-none last:basis-full md:last:!basis-[fit-content] supports-[flex-basis:fit-content]:md:last:shrink-0">
          <span className="inline-block md:hidden flex-none">
            <span className="inline-block h-[6px] w-[6px] rounded-full mx-2 bg-[#000] align-[2px]" />
            <span>...</span>
          </span>
          <span className="inline-block flex-none h-[6px] w-[6px] rounded-full mx-2 bg-[#000] align-[2px]" />
          <a
            href="/Martin/"
            className="breadcrumb-item-content text-sm text-textNormalColor font-normal group-last:font-bold"
            aria-current="page"
          >
            Martin
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
