import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import paths from '../../constants/path'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Listar produtos',
    link: paths.Products,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Novo produto',
    link: paths.NewProduct,
    icon: AddIcon
  }
]

export default listLinks
