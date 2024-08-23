import { useState } from "react";
import "./App.css";
import Card from "./Components/card";
import Zoom from "./Components/Zoom";

function App() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1724253186705-33d8b51f0e82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cofee Vibes",
      description:
        "Its for test I'm Uploading coffee Picture Muhammad Hasan Alam",
      id: 1,
    },
    {
      img: "https://images.unsplash.com/photo-1724093118783-4ca6f6a4918a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "SeaView Vibes",
      description:
        "Its for test I'm Uploading SeaView Picture Muhammad Hasan Alam",
      id: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1724141973269-72f7b5c373e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Just For Fun",
      description:
        "Its for test I'm Uploading ancientSite Picture Muhammad Hasan Alam",
      id: 3,
    },
    {
      img: "https://images.unsplash.com/photo-1723744910071-13809ddfe9df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Food who like this Foood",
      description:
        "Its for test I'm Uploading foood Picture Muhammad Hasan Alam",
      id: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1724180872527-4087c8db6093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "This Moon is Georgeous",
      description:
        "Its for test I'm Uploading foood Picture Muhammad Hasan Alam",
      id: 5,
    },
    {
      img: "https://images.unsplash.com/photo-1541275055241-329bbdf9a191?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Purple Flowers",
      description:
        "Its for test I'm Uploading Flowers Picture Muhammad Hasan Alam",
      id: 6,
    },
    {
      img: "https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=1401&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A new laptop",
      description:
        "Its for test I'm Uploading laptop Picture Muhammad Hasan Alam",
      id: 7,
    },
    {
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A mobile phone",
      description:
        "Its for test I'm Uploading mobile Picture Muhammad Hasan Alam",
      id: 8,
    },
    {
      img: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A cute Cat",
      description: "Its for test I'm Uploading cat Picture Muhammad Hasan Alam",
      id: 9,
    },
    {
      img: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Strawberry Good",
      description:
        "Its for test I'm Uploading Strawberry Picture Muhammad Hasan Alam",
      id: 10,
    },
    {
      img: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Orange Family",
      description:
        "Its for test I'm Uploading orange Picture Muhammad Hasan Alam",
      id: 11,
    },
    {
      img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ice-Cream i like it",
      description:
        "Its for test I'm Uploading Ice-Cream Picture Muhammad Hasan Alam",
      id: 12,
    },
    {
      img: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Who Likes to eat fries",
      description:
        "Its for test I'm Uploading fries Picture Muhammad Hasan Alam",
      id: 13,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Burger Lovers are king",
      description:
        "Its for test I'm Uploading Burger Picture Muhammad Hasan Alam",
      id: 14,
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePress = (img, title, description) => {
    setSelectedImage({ img, title, description });
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <h1 className="text-3xl font-bold text-center p-4">
        IMAGE GALLERY BY MUHAMMAD HASAN ALAM
      </h1>
      <div className="flex flex-wrap gap-6 p-4 justify-center">
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            onPress={() => handlePress(item.img, item.title, item.description)}
          />
        ))}
        {selectedImage && (
          <Zoom
            img={selectedImage.img}
            title={selectedImage.title}
            description={selectedImage.description}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
