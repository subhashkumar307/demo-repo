const TopBanner = () => (
    <>
        <div className="bg-danger text-white text-center">
            <h2>Amazon Shooping</h2>
        </div>
    </>
);
const FooterContent = () => (
    <>
        <div className="bg-danger text-center text-white">
            <span>&copy; copyright 2021</span>
        </div>

    </>
);
const MainContent = () => (
    <>
        <div style={{height: '300px'}}>
            <h2>Home</h2>
            <p>Online Shooping</p>
            <LoginComponent />
        </div>
    </>
);

const LoginComponent = () => (
    <>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text" /></dd>
            <dt>Password</dt>
            <dd><input type="password" /></dd>
        </dl>
        <button className="btn btn-primary">Login</button>
    </>
)

ReactDOM.render(
    <>
        <TopBanner />
        <MainContent />
        <FooterContent />
    </>,
    document.getElementById("container")
)