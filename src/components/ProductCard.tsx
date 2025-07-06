import styles from './ProductCard.module.scss'

interface ProductCardProps {
  title: string
  origin: string
  price: number // в копейках
  currency: 'RUB' | 'USD' | 'EUR'
  imageUrl: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, origin, price, currency, imageUrl }) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(price / 100)

  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        loading="lazy"
        decoding="async"
        className={styles.image}
      />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>Страна: {origin}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
    </div>
  )
}
