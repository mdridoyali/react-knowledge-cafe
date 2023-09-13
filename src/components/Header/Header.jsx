import profile from '../../assets/images/profile.png'
// import profile from '../../assets/'
const Header = () => {
    return (
        <header className='md:flex justify-between items-center py-4 border-b-2 w-11/12 mx-auto'>
         <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
         <img src={profile} alt=""/>      
        </header>
    );
};

export default Header;