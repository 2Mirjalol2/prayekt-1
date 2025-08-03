import React from "react";

const telifonlar = [
  {
    id: 1,
    name: "Samsung Galaxy M55",
    price: "$399",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m55-1.jpg",
  },
  {
    id: 2,
    name: "iPhone 13",
    price: "$650",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
  },
  {
    id: 3,
    name: "Redmi Note 13 Pro",
    price: "$230",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-5g-1.jpg",
  },
  {
    id: 4,
    name: "iPhone SE (2022)",
    price: "$429",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2022-1.jpg",
  },
  {
    id: 5,
    name: "Samsung Galaxy A35",
    price: "$329",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a35-1.jpg",
  },
  {
    id: 6,
    name: "iPhone 15 Pro Max",
    price: "$1299",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
  },
  {
    id: 7,
    name: "Redmi Note 13 Pro+",
    price: "$369",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-plus-1.jpg",
  },
  {
    id: 8,
    name: "Infinix GT 20 Pro",
    price: "$280",
    image: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-gt-20-pro-1.jpg",
  },
  {
    id: 9,
    name: "Realme 12+",
    price: "$240",
    image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-plus-1.jpg",
  },
  {
    id: 10,
    name: "Lava Blaze Curve 5G",
    price: "$189",
    image: "https://fdn2.gsmarena.com/vv/pics/lava/lava-blaze-curve-5g-1.jpg",
  },
  {
    id: 11,
    name: "Honor X9b",
    price: "$290",
    image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9b-1.jpg",
  },
  {
    id: 12,
    name: "Samsung Galaxy F15",
    price: "$199",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-f15-5g-1.jpg",
  },
  {
    id: 13,
    name: "Tecno Spark 20 Pro+",
    price: "$160",
    image: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-20-pro-plus-1.jpg",
  },
  {
    id: 14,
    name: "Honor Magic6 Pro",
    price: "$950",
    image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-magic6-pro-1.jpg",
  },
  {
    id: 15,
    name: "Motorola Edge 40",
    price: "$450",
    image: "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge40-1.jpg",
  },
  {
    id: 16,
    name: "OnePlus 12",
    price: "$699",
    image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg",
  },
  {
    id: 17,
    name: "Vivo X100",
    price: "$850",
    image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x100-1.jpg",
  },
  {
    id: 18,
    name: "Realme 11 Pro+",
    price: "$330",
    image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-11-pro-plus-1.jpg",
  },
  {
    id: 19,
    name: "Sony Xperia 1 V",
    price: "$1100",
    image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-v-1.jpg",
  },
  {
    id: 20,
    name: "Huawei P60 Pro",
    price: "$990",
    image: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p60-pro-1.jpg",
  },
  {
    id: 21,
    name: "ZTE Nubia Z50",
    price: "$420",
    image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-z50-1.jpg",
  },
  {
    id: 22,
    name: "Xiaomi 14",
    price: "$699",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg",
  },
  {
    id: 23,
    name: "Oppo Find X6",
    price: "$800",
    image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x6-1.jpg",
  },
  {
    id: 24,
    name: "Meizu 20",
    price: "$500",
    image: "https://fdn2.gsmarena.com/vv/pics/meizu/meizu-20-1.jpg",
  },
  {
    id: 25,
    name: "Honor 90",
    price: "$380",
    image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-90-1.jpg",
  },
  {
    id: 26,
    name: "Honor Magic 6 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/honor-magic6-pro.jpg",
    price: "$1099",
  },
  {
    id: 27,
    name: "iQOO Z9 Turbo",
    image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z9-turbo.jpg",
    price: "$429",
  },
  {
    id: 28,
    name: "Samsung Galaxy F55",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f55.jpg",
    price: "$499",
  },
];

const Telifon = ({ onAddToCart, searchTerm }) => {
  const filteredPhones = telifonlar.filter((phone) =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="phone-list">
      {filteredPhones.map((item) => (
        <div className="phone-card" key={item.id}>
          <img
            className="phone-image"
            src={item.image}
            alt={item.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/220x300?text=No+Image";
            }}
          />
          <h3 className="phone-name">{item.name}</h3>
          <p className="phone-price">{item.price}</p>
          <button
            type="button"
            className="buy-btn"
            onClick={() => onAddToCart(item)}
          >
            Sotib olish
          </button>
        </div>
      ))}
      {filteredPhones.length === 0 && <p>Hech qanday telefon topilmadi.</p>}
    </div>
  );
};

export default Telifon;
