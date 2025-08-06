'use client';

import Button from './Button';
import Footer from './Footer';
import ImageView from './Image';
import List from './List';
import TextDescription from './TextDescription';

export default function Body() {
  return (
    <section className="relative overflow-hidden md:min-h-[805px] md:pt-[212px] flex flex-col md:flex-row md:ml-[211px] items-center justify-between px-6 md:px-16 py-12 md:gap-10 gap-6">
      <ImageView />
      <div className="flex flex-col top-[418px] md:top-[212px] h-[511px] w-[516px] gap-[30px] z-10 flex-col">
        <TextDescription />
        <List />
        <div className="flex flex-col top-[418px] md:top-[212px] h-[511px] w-[516px] z-10 flex-col">
          <Button />
          <Footer />
        </div>
      </div>
      <div className="md:w-1/2 w-full z-10" />
    </section>
  );
}
