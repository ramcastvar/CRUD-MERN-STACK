import React, { useState, useEffect } from 'react'
import { Modal, Container, Section } from 'react-bulma-components'

import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'
import Form from './Form'
import Loading from './Loading'
import { getProducts, saveProduct } from '../services'

const ProductLayout = () => {  
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    async function loadProducts () {
        const response = await getProducts()
        
        if (response.status === 200) {
            setProducts(response.data.products)
        }

        setIsLoading(false)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    const handleSubmitProduct = async (data) => {
        await saveProduct(data)
        loadProducts()
        setIsModalOpen(false)
    }

    return (
        <Container>
            <Header title="Product Aplication v1.1" />
            <AddButton onClick={() => setIsModalOpen(true)} />
            
            {
                isLoading && <Loading />
            }
            {
                !isLoading && !products.length && (
                    <Section>
                        <Container>
                            <h2 className="title has-text-centered">
                                File with no products. You must insert one by clicking on Add button
                            </h2>
                        </Container>
                    </Section>
                )
            }
            {
                !isLoading && products.length && <ListProducts products={products} />
            }
            
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header showClose={false}>
                        <Modal.Card.Title>
                            Add Product
                        </Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmitProduct} />
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </Container>
    )
}

export default ProductLayout
