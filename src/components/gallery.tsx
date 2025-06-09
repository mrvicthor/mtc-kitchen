import galleryImage4 from "../assets/Homepage/image-gallery-4.png";
import galleryImage1 from "../assets/Homepage/image-gallery1.png";
import galleryImage2 from "../assets/Homepage/image-gallery2.png";
import galleryImage3 from "../assets/Homepage/image-gallery3.png";
import Button from "./shared/button";
const Galleries = () => {
  const galleries = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
  ];
  return (
    <section className="py-[5.8125rem] flex justify-center px-4">
      <div className="flex flex-col items-center gap-10 w-[81.25rem]">
        <h3 className="text-[2rem] capitalize text-[#222222] tracking-[0px] font-bold">
          customer gallery
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden">
          {galleries.map((gallery) => (
            <img key={gallery} src={gallery} alt="kitchen image" />
          ))}
        </div>
        <Button content="view more" />
      </div>
    </section>
  );
};

export default Galleries;
