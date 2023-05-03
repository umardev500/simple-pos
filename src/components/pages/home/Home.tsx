import { CardList, Footer, Header } from '@components/organisms'
import React from 'react'

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between gap-2">
            <div>
                <Header />
                <CardList />
            </div>
            <Footer />
        </div>
    )
}
