export interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Skating Girl",
    date: "26/6/2025",
    image: pic1,
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ligula ac ipsum bibendum suscipit.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan
    ligula ac ipsum bibendum suscipit. Nunc luctus libero lectus, et semper neque commodo
    in. Duis luctus, ligula eget ultrices fringilla, urna libero cursus est, at lobortis
    metus justo in sapien. Maecenas sit amet urna sed ligula rutrum sollicitudin. Fusce
    luctus pellentesque augue, ac porttitor lectus ultrices eget. Nullam commodo orci ut
    tincidunt volutpat. Curabitur in sagittis nisi. Quisque porta turpis at ipsum ultricies
    laoreet. Fusce quam orci, gravida sit amet facilisis at, faucibus ut turpis. Vestibulum
    aliquam massa lacus, condimentum tempus nisl iaculis a. Ut accumsan cursus velit. Nunc
    commodo nulla ut laoreet malesuada. Sed ultrices porta metus.
    
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Cras vel nisi ac nisi convallis faucibus. Suspendisse potenti. Sed euismod urna vel magna ultricies, vel tincidunt nisl tincidunt. Vivamus vel nunc vel nunc tincidunt tincidunt. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vel ultricies nisl nisl vel nunc.`
  },
  {
    id: 2,
    title: "Working Man",
    date: "24/6/2025",
    image: pic2,
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ligula ac ipsum bibendum suscipit.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan
    ligula ac ipsum bibendum suscipit. Nunc luctus libero lectus, et semper neque commodo
    in. Duis luctus, ligula eget ultrices fringilla, urna libero cursus est, at lobortis
    metus justo in sapien. Maecenas sit amet urna sed ligula rutrum sollicitudin. Fusce
    luctus pellentesque augue, ac porttitor lectus ultrices eget. Nullam commodo orci ut
    tincidunt volutpat. Curabitur in sagittis nisi. Quisque porta turpis at ipsum ultricies
    laoreet. Fusce quam orci, gravida sit amet facilisis at, faucibus ut turpis. Vestibulum
    aliquam massa lacus, condimentum tempus nisl iaculis a. Ut accumsan cursus velit. Nunc
    commodo nulla ut laoreet malesuada. Sed ultrices porta metus.
    
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Cras vel nisi ac nisi convallis faucibus. Suspendisse potenti. Sed euismod urna vel magna ultricies, vel tincidunt nisl tincidunt. Vivamus vel nunc vel nunc tincidunt tincidunt. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vel ultricies nisl nisl vel nunc.`
  }
]; 

import pic1 from '@/assets/portfolio/portfolio9.jpg';
import pic2 from '@/assets/portfolio/portfolio8.jpg';