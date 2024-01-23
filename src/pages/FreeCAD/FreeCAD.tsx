import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import { Divider, Grid, Typography } from '@mui/material'
import freecad_logo from '../../assets/img/FreeCAD-logo.svg.png'
import cubo from '../../assets/img/cubo.png'
import esfera_before_run from '../../assets/img/esfera_before_run.png'
import espiral_freecad from '../../assets/img/espiral_freecad.png'
import espiral_gmsh from '../../assets/img/espiral_gmsh.png'
import placas from '../../assets/img/placas.png'
import placas_before_run from '../../assets/img/placas_before_run.png'
import esferas_step from '../../assets/resources/esferas.step.txt'
import esferas_geo from '../../assets/resources/esferas.geo.txt'
import esferas_pro from '../../assets/resources/esferas.pro.txt'
import espiral1_fcstd from '../../assets/resources/espiral1.FCStd.txt'
import alambres_geo from '../../assets/resources/alambres.geo.txt'
import alambres_pro from '../../assets/resources/alambres.pro.txt'
import pieza_FCStd from '../../assets/resources/pieza.FCStd.txt'
import placas_pro from '../../assets/resources/placas.pro.txt'
import placas_geo from '../../assets/resources/placas.geo.txt'
import Sidebar from '../home/components/Sidebar'

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

export default function FreeCAD({ title }: { title: string }) {
  return (
    <Grid container spacing={5} sx={{ mt: 3 }}>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          '& .markdown': {
            py: 3
          }
        }}
      >
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <img
            src={freecad_logo}
            alt=''
            style={{ height: '10rem', width: '10rem' }}
          />
          <p>
            FreeCAD es una herramienta de modelado paramétrico en 3D que permite
            a los usuarios crear y editar modelos de objetos geométricos con
            gran detalle. Con su enfoque orientado a la física y a la geometría
            computacional, FreeCAD se convierte en una opción ideal para
            aquellos que desean explorar y visualizar conceptos geométricos en
            un entorno tridimensional. Sus características incluyen la capacidad
            de realizar mediciones precisas, simular movimientos y realizar
            análisis estructurales, lo que proporciona a los usuarios una
            experiencia completa y detallada de geometría aplicada.
          </p>
        </div>
        <Typography variant='h6' gutterBottom>
          Instalación FreeCAD
        </Typography>
        <p>
          La instalación de FreeCAD es un proceso sencillo que te permitirá
          disfrutar de todas las capacidades de este software de modelado
          paramétrico en 3D. A continuación, te presento una descripción paso a
          paso de cómo instalar FreeCAD:
        </p>
        <ol>
          <li>
            Visita el sitio web oficial de FreeCAD en tu navegador web
            preferido.
          </li>
          <li>
            Busca la sección de descargas y asegúrate de seleccionar la versión
            de FreeCAD compatible con tu sistema operativo (Windows 10 en este
            caso).
          </li>
          <li>
            Haz clic en el enlace de descarga correspondiente y guarda el
            archivo de instalación en una ubicación accesible en tu computadora.
          </li>
          <li>
            Una vez que la descarga se haya completado, navega hasta el
            directorio donde se guardó el archivo de instalación y haz doble
            clic en él para iniciar el proceso de instalación.
          </li>
          <li>
            Se abrirá el asistente de instalación de FreeCAD. Sigue las
            instrucciones proporcionadas en cada paso del asistente. Asegúrate
            de leer cuidadosamente las opciones disponibles y seleccionar las
            que mejor se ajusten a tus necesidades.
          </li>
          <li>
            Durante la instalación, es posible que se te solicite instalar
            complementos o bibliotecas adicionales para el correcto
            funcionamiento de FreeCAD. Asegúrate de seleccionar las opciones
            recomendadas por el instalador para garantizar una instalación
            completa y adecuada.
          </li>
          <li>
            Una vez que hayas completado todos los pasos del asistente de
            instalación, haz clic en "Finalizar" para finalizar el proceso de
            instalación.
          </li>
          <li>
            Ahora, puedes encontrar el acceso directo de FreeCAD en tu menú de
            inicio o en tu escritorio. Haz clic en el acceso directo para
            iniciar FreeCAD.
          </li>
        </ol>
        <p>
          ¡Enhorabuena! Has instalado con éxito FreeCAD en tu sistema Windows
          10. Ahora puedes explorar todas las funcionalidades de este software
          de modelado paramétrico en 3D y comenzar a crear tus propios diseños y
          modelos.
        </p>
        <p>
          Recuerda consultar la documentación oficial de FreeCAD y explorar los
          tutoriales disponibles para aprovechar al máximo las capacidades de
          este poderoso software de geometría computacional. ¡Disfruta de tu
          experiencia con FreeCAD!
        </p>

        <Typography variant='h3' gutterBottom>
          Ejercicios FreeCAD
        </Typography>
        <hr />
        <div className='ejercicio ejercicio_cubo'>
          <h2>Ejercicio esfera</h2>
          <br />
          <h3>Parte FreeCAD</h3>
          <p>
            Primero creamos la esfera con la ayuda del profesor, en el cual se
            agregara el enlace en el siguiente url:{' '}
            <a href=''>creación de esfera</a> y el archivo resultante lo
            descargarás
            <a href={esferas_step} download=''>
              aquí
            </a>
            <br />
            <img src={cubo} alt='' className='img' />
          </p>
          <h3>Parte GMSH</h3>
          <p>
            Ahora crearemos el archivo .geo con la ayuda de la herramienta de
            GMSH, lo podrás descargar con el siguiente
            <a href={esferas_geo}>enlace</a> y el archivo .pro en este
            <a href={esferas_pro}>enlace</a>
            <br />
            <img src={esfera_before_run} alt='' className='img' />
          </p>
        </div>
        <div className='ejercicio_espiral ejercicio'>
          <h2>Ejercicio espiral</h2>
          <hr />
          <h3>Parte FreeCAD</h3>
          <p>
            Primero creamos la pieza en forma de espiral con la herramienta
            FreeCAD. Para una mayor claridad al realizar este ejercicio es
            recomendable seguir el video en el cual se encontrará en el link
            siguiente. <br />
            <a
              href='https://drive.google.com/file/d/1pED9gtP2oUwxt73Fu_aGt-48C2jkio-d/view'
              target='_blank'
              rel='noopener noreferrer'
            >
              Enlace para construir espiral
            </a>
            <br />
            El archivo creado lo podrás descargar de
            <a href={espiral1_fcstd}>aquí</a>
          </p>
          <img src={espiral_freecad} alt='' className='img' />
          <h3>Parte GMSH</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            dignissimos, cum, ipsa nostrum in aut reprehenderit odit ullam
            recusandae quae dolore doloribus repellendus voluptatum vitae odio
            quod, temporibus voluptatem quam. Temporibus ullam hic beatae fugit,
            vero voluptatem ipsa! Saepe ducimus nesciunt, unde excepturi nemo
            <br />
            Para una mejor observación en la creación del archivo .geo sigue el
            siguiente enlace
            <a
              href='https://drive.google.com/file/d/1YoThL88iJQIBFWy3WvYj92dj9KMNSfg9/view'
              target='_blank'
            >
              aquí
            </a>
            <br />
            Descarga el archivo
            <a href={alambres_geo}>alambres.geo</a> y también descarga el
            archivo
            <a href={alambres_pro}>alambres.pro</a>
          </p>
          <img src={espiral_gmsh} alt='' className='img' />
          <div className='ejercicio_placas ejercicio'>
            <h2>Ejercicio Placas</h2>
            <h3>Parte FreeCAD</h3>
            <p>
              Primero creamos la pieza en FreeCAD en la cual te puedes apoyar
              siguiendo el video que describe paso a paso su elaboración
              <a
                href='https://drive.google.com/file/d/18JZq_6Fkwi8UwVOuS3QHIapHc0vcom-m/view'
                target='_blank'
              >
                Construcción de placas en FreeCAD
              </a>
              y también puedes descargar el archivo .std
              <a href={pieza_FCStd} download=''>
                pieza.std
              </a>
              <br />
              <img src={placas} alt='' className='img' />
              <h3>Parte GMSH</h3>
              <p>
                Ahora abriremos el archivo en GMSH y crearemos el archivo .geo
                con el video que se sugirió previamente en la parte de la
                construcción del objeto en FreeCAD. El archivo geo los
                descargarás
                <a href={placas_geo} download=''>
                  aquí
                </a>
                y el archivo .pro en este <a href={placas_pro}>enlace</a>
                <br />
                <img src={placas_before_run} alt='' className='img' />
              </p>
            </p>
          </div>
        </div>
      </Grid>
      <Sidebar
        title={sidebar.title}
        description={sidebar.description}
        archives={sidebar.archives}
        social={sidebar.social}
      />
    </Grid>
  )
}
