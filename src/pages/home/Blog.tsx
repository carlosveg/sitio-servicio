import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { texts } from './components/main-text'
import Sidebar from './components/Sidebar'
import CPP from '../CPP/CPP'
import QtCreator from '../QtCreator/QtCreator'
import CGAL from '../CGAL/CGAL'
import FreeCAD from '../FreeCAD/FreeCAD'
import OneLab from '../OneLab/OneLab'

// const path = '/sitio-servicio'
const sections = [
  { title: 'Inicio', url: '/' },
  { title: 'C++', url: '/c++' },
  { title: 'QtCreator', url: '/qtcreator' },
  { title: 'CGAL', url: '/cgal' },
  { title: 'FREECAD', url: '/freecad' },
  { title: 'ONE LAB', url: '/onelab' }
]

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'Ecuaciones diferenciales parciales', url: '#' },
    { title: 'Método de Galerien', url: '#' },
    { title: 'Ecuación de calor', url: '#' },
    { title: 'Ecuaciones de electromagnetismo', url: '#' },
    { title: 'Ecuaciones de elasticidad', url: '#' },
    { title: 'Triangulaciones de Delaunay', url: '#' }
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon }
  ]
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({})

export const Home = () => {
  return (
    <Grid container spacing={5} sx={{ mt: 3 }}>
      <Main title='Bienvenido' posts={texts} />
      <Sidebar
        title={sidebar.title}
        description={sidebar.description}
        archives={sidebar.archives}
        social={sidebar.social}
      />
    </Grid>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>Go to the home page</p>
    </div>
  )
}

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title='Página Servicio Social' sections={sections} />
        <main>
          <Routes>
            {/* <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post, index) => (
                <FeaturedPost key={index} post={post} />
              ))}
            </Grid> */}
            <Route index path='' element={<Home />} />
            <Route path='/c++' element={<CPP title='C++' />} />
            <Route
              path='/qtcreator'
              element={<QtCreator title='QtCreator' />}
            />
            <Route path='/cgal' element={<CGAL title='CGAL' />} />
            <Route path='/freecad' element={<FreeCAD title='FreeCAD' />} />
            <Route path='/onelab' element={<OneLab title='ONE Lab' />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </main>
      </Container>
      <Footer
        title='Desarrollado por'
        description={`El alumno Vega Gloria Carlos Raymundo y el profesor Crispin Herrera Yañez ${new Date().getFullYear()}`}
      />
    </ThemeProvider>
  )
}
