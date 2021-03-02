import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => (
	<Layout title="Tus favoritos" subtitle="Aquí puedes encontrar tus favoritos">
		<h1>Favs</h1>
		<FavsWithQuery />
	</Layout>
)

export default Favs
