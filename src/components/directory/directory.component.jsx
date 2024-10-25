import { useState, useEffect } from "react";
import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";
import Spinner from "../spinner/spinner.component";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://images.pexels.com/photos/13221666/pexels-photo-13221666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl:
      "https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2g",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://images.pexels.com/photos/28976593/pexels-photo-28976593/free-photo-of-trendy-woman-in-black-fashion-outfit-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://images.pexels.com/photos/27602234/pexels-photo-27602234/free-photo-of-a-man-in-a-denim-jacket-sitting-on-a-stool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/mens",
  },
];

const Directory = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="directory-container">
      {isLoading ? (
        <Spinner />
      ) : (
        categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))
      )}
    </div>
  );
};

export default Directory;
