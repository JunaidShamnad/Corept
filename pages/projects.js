import Head from 'next/head'
import ProjectsPage from '../container/ProjectsPage'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Corept | Projects</title>
        <meta name="description" content="Corept Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectsPage/>
    </>
  )
}
