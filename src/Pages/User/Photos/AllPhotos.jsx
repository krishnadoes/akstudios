import './allPhotoMasonry.css'


const AllPhotos = () => {

    const images = [
        {
          src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://docs.material-tailwind.com/img/team-3.jpg",
          alt: "gallery-photo"
        },
         {
            src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://docs.material-tailwind.com/img/team-3.jpg",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://docs.material-tailwind.com/img/team-3.jpg",
            alt: "gallery-photo"
          },
           {
              src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
              alt: "gallery-photo"
            },
            {
              src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              alt: "gallery-photo"
            },
            {
              src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
              alt: "gallery-photo"
            },
            {
              src: "https://docs.material-tailwind.com/img/team-3.jpg",
              alt: "gallery-photo"
            },  {
          src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          alt: "gallery-photo"
        },
        {
          src: "https://docs.material-tailwind.com/img/team-3.jpg",
          alt: "gallery-photo"
        },
         {
            src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://docs.material-tailwind.com/img/team-3.jpg",
            alt: "gallery-photo"
          },
          {
             src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
             alt: "gallery-photo"
           },
           {
             src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
             alt: "gallery-photo"
           },
           {
             src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
             alt: "gallery-photo"
           },
           {
             src: "https://docs.material-tailwind.com/img/team-3.jpg",
             alt: "gallery-photo"
           }, {
            src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            alt: "gallery-photo"
          },
          {
            src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
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
