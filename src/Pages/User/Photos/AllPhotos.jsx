import './allPhotoMasonry.css'


const AllPhotos = () => {

    const images = [
        {
          src: "3 (5).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (3).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (4).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (5).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (1).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (6).jpeg",
          alt: "gallery-photo"
        },
         {
            src: "2 (1).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "2 (2).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "3 (1).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "1 (7).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "1 (8).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "1 (9).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "1 (10).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "1 (11).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "1 (12).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "1 (13).jpeg",
            alt: "gallery-photo"
          },
           {
              src: "1 (14).jpeg",
              alt: "gallery-photo"
            },
            {
              src: "1 (15).jpeg",
              alt: "gallery-photo"
            },
            {
              src: "1 (16).jpeg",
              alt: "gallery-photo"
            },
            {
              src: "1 (17).jpeg",
              alt: "gallery-photo"
            },  {
          src: "1 (18).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (19).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (20).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (21).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "1 (4).jpeg",
          alt: "gallery-photo"
        },
        {
          src: "2 (3).jpeg",
          alt: "gallery-photo"
        },
         {
            src: "3 (4).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "2 (5).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "1 (3).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "2 (4).jpeg",
            alt: "gallery-photo"
          },
          {
             src: "2 (6).jpeg",
             alt: "gallery-photo"
           },
           {
             src: "2 (5).jpeg",
             alt: "gallery-photo"
           },
           {
             src: "2 (7).jpeg",
             alt: "gallery-photo"
           },
           {
             src: "2 (8).jpeg",
             alt: "gallery-photo"
           }, {
            src: "3 (3).jpeg",
            alt: "gallery-photo"
          },
          {
            src: "3 (2).jpeg",
            alt: "gallery-photo"
          }
      ];
    
      return (
<>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-2">
        {Array.from({ length: 16 }).map((_, colIndex) => (
          <div className="grid gap-4" key={colIndex}>
            {images.slice(colIndex * 3, colIndex * 3 + 3).map((image, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      </>
    );
  
    };

export const PhotoSkeletonLoader = () => (
        <div className="relative animate-pulse rounded-3xl w-full bg-slate-300"
            style={{
                height: `${Math.floor(Math.random() * (450 - 300 + 1)) + 300}px`,
            }}>
            <div className="absolute bottom-6 left-6 text-white flex flex-col gap-0">
                <div className="flex items-center text-desktopBodySmall uppercase font-semibold tracking-wide">
                    <span className="inline-block animate-pulse w-28 h-4 rounded-lg bg-slate-400 mr-2 my-4"></span>
                    <span className="inline-block animate-pulse w-10 h-4 rounded-lg bg-slate-400"></span>
                </div>
                <div className="flex gap-2 text-desktopBodyMedium font-bold">
                    <span className="inline-block animate-pulse w-10 h-4 rounded-lg bg-slate-400"></span>
                    <span className="inline-block animate-pulse w-10 h-4 rounded-lg bg-slate-400"></span>
                </div>
            </div>
        </div>
        )

        export default AllPhotos;
