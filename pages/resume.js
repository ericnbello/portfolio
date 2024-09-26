import Navbar from '@components/Navbar.js';
import Resume from '../components/Resume.js';
import ContainerBlock from '@components/ContainerBlock.js';

export default function resume() {
  return (
    <ContainerBlock title="Resume | Eric Bello | Professional Web Development Services" description="">
      <Resume />
    </ContainerBlock>
  )
}