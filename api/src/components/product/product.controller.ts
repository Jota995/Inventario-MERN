import { Request, Response } from 'express'
import productModel from './product.model'

class Product {
    constructor() {

    }

    public async getAllProducts(req: Request, res: Response) {
        try {
            const products = await productModel.find()
            res.json({ data: products })
        } catch (error) {
            console.log(error)
        }
    }

    public async getProduct(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const product = await productModel.findById(id)
            res.json({data:product})

        } catch (error) {
            console.log(error)
        }
    }

    public async createProduct(req: Request, res: Response) {
        try {
            const { name, category, description, price } = req.body
            const newProduct = new productModel({ name, category, description, price })
            await newProduct.save()
            res.json({ data: newProduct })

        } catch (error) {
            console.log(error)
        }
    }

    public async updateProduct(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const { name, category, description, price } = req.body
            await productModel.findByIdAndUpdate(id,{name, category, description, price})
            res.json({message: 'product update successfully'})
        } catch (error) {
            console.log(error)
        }
    }

    public async deleteProduct(req: Request, res: Response) {
        try {
            const {id} = req.params;
            await productModel.findByIdAndDelete(id)
            res.json({message:'product delete successfully'})
        } catch (error) {
            console.log(error)
        }
    }
}

export default new Product()