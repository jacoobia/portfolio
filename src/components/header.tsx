import './header.scss';

const Header = () => {
    return (
        <header className='root sticky top-0 z-10'>
            <div className='content w-11/12 max-w-screen-lg mx-auto h-full flex justify-center items-center'>
                <span className='title font-bold text-2xl w-1/4 transition duration-500 hover:text-blue-400 cursor-pointer'>
                    Anthony Jacob Hampton
                </span>
                <div className='spacer flex-1'></div>
                <div className='nav w-1/6 flex justify-between'>
                    <span className='transition duration-500 hover:text-blue-400 cursor-pointer'>Personal</span>
                    <span className='transition duration-500 hover:text-blue-400 cursor-pointer'>Professional</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
