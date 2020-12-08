import {Router} from 'express'

import productRoute from '../components/product/product.routes'

const router = Router()

router.use('/api/v1/products',productRoute)

export default router


