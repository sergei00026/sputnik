import styles from '../components/ProductCard.module.scss'
import { ProductCard } from '../components/ProductCard'

type Currency = 'RUB' | 'USD' | 'EUR'

type ProductCardProps = {
  title: string
  origin: string
  price: number
  currency: Currency
  imageUrl: string
}

const products: ProductCardProps[] = [
  {
    title: 'Яблоко',
    origin: 'Россия',
    price: 34900,
    currency: 'RUB',
    imageUrl: '/sputnik/images/Red_Apple.jpg',
  },
  {
    title: 'Апельсин',
    origin: 'Испания',
    price: 25900,
    currency: 'EUR',
    imageUrl: 'images/Orange-Fruit-Pieces.jpg',
  },
  {
    title: 'Банан',
    origin: 'Эквадор',
    price: 19900,
    currency: 'USD',
    imageUrl: 'images/Banana.jpg',
  },
]


export default function ProductsPage() {
  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <ProductCard  key={index} {...product} />
      ))}
    </div>
  )
}
