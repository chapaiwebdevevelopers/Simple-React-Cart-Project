
import Logo from '../src/assets/logo.png'
import { LuCircleDollarSign } from 'react-icons/lu';

const Nav = ({coin}:{coin:number}) => {
  
    return (
        <div className='bg-red-100'>
            <nav className='container flex justify-between mx-auto'>
            <img src={Logo} alt="" />
            <ul className='flex gap-3 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>team</li>
                <li>Schedule</li>
                <button className='text-2xl text-red-500 items-center flex gap-2'> <LuCircleDollarSign></LuCircleDollarSign> {coin}</button>
            </ul>
            </nav>
        </div>
    );
};

export default Nav;