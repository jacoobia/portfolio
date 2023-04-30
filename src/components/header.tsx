import './header.scss';

const Header = () => {
    return (
        <header className='root'>
            <div className='content'>
                <span className='title'>Anthony Jacob Hampton</span>
                <div className='spacer' />
                <div className='nav'>
                    <span>Personal</span>
                    <span>Professional</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
