import { create } from "zustand";


export const Products = create((set) => ({
    products: [   {
      id:1,
      src: '/pngwing.com (12).png',
      title: 'Running Shoes',
      price: 120,
      description: 'High-performance running shoes for all terrains.',
      rating: 4.5
     , category: 'shoes',
    },
    {
      id:2,
      src: '/pngwing.com (13).png',
      title: 'Casual Shirt',
      price: 45,
      description: 'Comfortable and stylish casual shirt for everyday wear.',
      rating: 4.0,
      category: 'shoes',

    },
    {
      id:3,
      src: '/pngwing.com (14).png',
      title: 'Leather Jacket',
      price: 250,
      description: 'Premium leather jacket with a classic design.',
      rating: 4.8,
     category: 'shirt',
    },
    {
      id:4,
      src: '/pngwing.com (15).png',
      title: 'Sports Watch',
      price: 80,
      description: 'Durable sports watch with multiple features.',
      rating: 4.2,
     category: 'Jacket',
    },],
    ActiveAlert:{
      type: '',
      message: '',
      show: false,
    },
    SetActiveAlert: (ActiveAlert) => set({ ActiveAlert }),
    setProducts: (products) => set({ products }),
    tableData: [
            { title:  'sport Shoes', usersrc:"/customer.jpeg", count:500, productSrc: '/pngwing.com (12).png', category:'Shoes',user: "Sara", price: 500,  state: "Active", time: "2025:5:31" ,description:' '},
            { title:  ' Shoes',usersrc:"/customer2.jpeg", count:500, productSrc: '/pngwing.com (13).png', category:'Shirt', user: "Ali", price: 300, state: "Inactive", time: "2025:6:01" ,description:' '},
            { title:  'casual shirt', usersrc:"/customer3.jpeg", count:500, productSrc: '/pngwing.com (14).png', category:'Shoes', user: "Ahmed", price: 700, state: "Ordered", time: "2025:6:02",description:' ' },
            { title:  'Running Shoes', usersrc:"/customer4.jpeg", count:500, productSrc: '/pngwing.com (15).png', category:'Jacket', user: "Omar", price: 200,  state: "Active", time: "2025:6:03",description:' ' },
            { title:  'Running Shoes', usersrc:"/customer.jpeg", count:500, productSrc: '/pngwing.com (12).png', category:'Shoes', user: "Fatma", price: 600,  state: "Acitve", time: "2025:6:04",description:' ' },
            { title:  'Running Shoes', usersrc:"/customer2.jpeg", count:500, productSrc: '/pngwing.com (13).png', category:'Shirt', user: "Abdullah", price: 400,  state: "Inactive", time: "2025:6:05",description:' ' },
            { title:  ' jacket', usersrc:"/customer3.jpeg", count:500, productSrc: '/pngwing.com (14).png', category:'Shoes', user: "Hassan", price: 800,  state: "Ordered", time: "2025:6:06" ,description:' '},
            { title:  'Leather Jeans', usersrc:"/customer4.jpeg", count:500, productSrc: '/pngwing.com (15).png', category:'Jacket', user: "Mohammed", price: 350, state: "Ordered", time: "2025:6:07" ,description:' '},
    ],
    setTableData: (tableData) => set({ tableData }),
}));