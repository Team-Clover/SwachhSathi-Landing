import Masonry from "./Masonry";

const WasteGallery = () => {
  const items = [
    { id: 1, img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716", height: 400, url: "#" }, // recycling bins
    { id: 2, img: "https://images.unsplash.com/photo-1604147495798-56d1970a3eaa", height: 500, url: "#" }, // landfill
    { id: 3, img: "https://images.unsplash.com/photo-1599586120422-bb6eaf544a63", height: 450, url: "#" }, // waste segregation
    { id: 4, img: "https://images.unsplash.com/photo-1593642633279-1796119d5482", height: 600, url: "#" }, // compost
    { id: 5, img: "https://images.unsplash.com/photo-1606761568499-6fd570e87900", height: 480, url: "#" }, // plastic bottles
    { id: 6, img: "https://images.unsplash.com/photo-1610915529114-7a02c01a78a6", height: 520, url: "#" }, // e-waste
    { id: 7, img: "https://images.unsplash.com/photo-1605647540924-879e89b52b63", height: 460, url: "#" }, // metal recycling
    { id: 8, img: "https://images.unsplash.com/photo-1607990281513-5c00a2f40d51", height: 550, url: "#" }, // garbage truck
    { id: 9, img: "https://images.unsplash.com/photo-1624301332096-19bbd6c9c886", height: 430, url: "#" }, // textile waste
    { id: 10, img: "https://images.unsplash.com/photo-1622147968748-7a87f3a1e032", height: 570, url: "#" }, // ocean plastic cleanup
    { id: 11, img: "https://images.unsplash.com/photo-1581093588401-7a00c8c7d43b", height: 490, url: "#" }, // waste sorting hands
    { id: 12, img: "https://images.unsplash.com/photo-1623170335108-4b8c6df92647", height: 520, url: "#" }, // green recycling initiative
    { id: 13, img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb", height: 530, url: "#" }, // plastic bottles on beach
    { id: 14, img: "https://images.unsplash.com/photo-1528323273322-d81458248d40", height: 480, url: "#" }, // recycling center workers
    { id: 15, img: "https://images.unsplash.com/photo-1528323273322-5e0d36f74b2b", height: 460, url: "#" }, // eco bins
    { id: 16, img: "https://images.unsplash.com/photo-1618477388954-785d1c7a509a", height: 550, url: "#" }  // landfill machinery
  ];

  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <h1
        className="text-3xl font-extrabold text-center py-1
                   bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 
                   bg-clip-text text-transparent"
      >
        THE CHANGE IS HERE !
      </h1>
      <div className="w-full flex-1 px-6 pb-6">
        <Masonry items={items} />
      </div>
    </div>
  );
};

export default WasteGallery;
