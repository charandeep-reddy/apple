import logo from "../assets/apple-img/Navbar-assets/logo.svg";
import magnify from "../assets/apple-img/Navbar-assets/magnify.svg";
import bag from "../assets/apple-img/Navbar-assets/bag.svg";
import item1 from "../assets/apple-img/Navbar-assets/item1.svg";
import item2 from "../assets/apple-img/Navbar-assets/item2.svg";
import item3 from "../assets/apple-img/Navbar-assets/item3.svg";
import item4 from "../assets/apple-img/Navbar-assets/item4.svg";
import item5 from "../assets/apple-img/Navbar-assets/item5.svg";
import item6 from "../assets/apple-img/Navbar-assets/item6.svg";
import item7 from "../assets/apple-img/Navbar-assets/item7.svg";
import item8 from "../assets/apple-img/Navbar-assets/item8.svg";
import item9 from "../assets/apple-img/Navbar-assets/item9.svg";
import item10 from "../assets/apple-img/Navbar-assets/item10.svg";

function Navbar(){
    const navItems = [
        { image: logo, path: "/", alt: "logo" },
        { image: item1, path: "#", alt: "store" },
        { image: item2, path: "#", alt: "mac" },
        { image: item3, path: "#", alt: "ipad" },
        { image: item4, path: "#", alt: "iphone" },
        { image: item5, path: "#", alt: "watch" },
        { image: item6, path: "#", alt: "airpods" },
        { image: item7, path: "#", alt: "tv&home" },
        { image: item8, path: "#", alt: "entertainment" },
        { image: item9, path: "#", alt: "accessories" },
        { image: item10, path: "#", alt: "support" },
        { image: magnify, path: "#", alt: "magnify" },
        { image: bag, path: "#", alt: "bag" }, 
    ];
    return(
        <nav className="flex justify-center items-center bg-[#f5f5f7] h-11">
            <div className="flex items-center gap-10.5">
                {navItems.map((item, index) => (
                    <a key={index} href={item.path} className="flex items-center justify-center">
                        <img src={item.image} alt={item.alt}/>
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;