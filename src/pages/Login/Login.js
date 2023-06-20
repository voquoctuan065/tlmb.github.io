import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '~/container';

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const [err, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/auth/login', inputs);
            navigate('/');
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="register">
            <div className="heading">
                <div className="regis-head">
                    <div className="regis-wrapper">
                        <a href="/" className="header-with-search__logo-section">
                            <div className="header-with-search__logo-wrapper">
                                <svg
                                    className="header__nav--logo-img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 129.74 46.75"
                                >
                                    <defs>
                                        <linearGradient
                                            id="New_Gradient_Swatch_39"
                                            x1="117.02"
                                            y1="143.94"
                                            x2="179.62"
                                            y2="196"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0" stopColor="#8c5000"></stop>
                                            <stop offset="0.53" stopColor="#f5d97a"></stop>
                                            <stop offset="1" stopColor="#7f4400"></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="linear-gradient"
                                            x1="39.3"
                                            y1="6.01"
                                            x2="6.79"
                                            y2="1.96"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0" stopColor="#8c5000"></stop>
                                            <stop offset="0.4" stopColor="#f5d97a"></stop>
                                            <stop offset="1" stopColor="#7f4400"></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="New_Gradient_Swatch_39-2"
                                            x1="38.38"
                                            y1="17.92"
                                            x2="41.76"
                                            y2="-7.74"
                                            xlinkHref="#New_Gradient_Swatch_39"
                                        ></linearGradient>
                                        <linearGradient
                                            id="New_Gradient_Swatch_39-3"
                                            x1="30.6"
                                            y1="39.72"
                                            x2="30.93"
                                            y2="31.6"
                                            xlinkHref="#New_Gradient_Swatch_39"
                                        ></linearGradient>
                                        <linearGradient
                                            id="New_Gradient_Swatch_39-4"
                                            x1="150.33"
                                            y1="135.41"
                                            x2="136.94"
                                            y2="183.97"
                                            xlinkHref="#New_Gradient_Swatch_39"
                                        ></linearGradient>
                                    </defs>
                                    <title>Logo</title>
                                    <g id="Layer_1" data-name="Layer 1">
                                        <path
                                            d="M158.79,169.8l-2.4,7.79H139.72a17.65,17.65,0,0,1-6.18-1.1,16,16,0,0,1-4-2.15,14.14,14.14,0,0,1-4-4.54A12.14,12.14,0,0,1,124,164a12.13,12.13,0,0,1,.47-3.3l.13-.43h0l4.25-13.79,1.2-3.89h9.28l-1.2,3.89-1.27,4.12-3.6,11.68,0,.09c0,.09-.05.17-.07.26A4.85,4.85,0,0,0,133,164a5.1,5.1,0,0,0,.39,2,6,6,0,0,0,2.53,2.87,7.37,7.37,0,0,0,3.8,1Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="url(#New_Gradient_Swatch_39)"
                                        ></path>
                                        <polygon
                                            points="37.47 0 35.07 7.79 7.25 7.79 9.65 0 37.47 0"
                                            fill="url(#linear-gradient)"
                                        ></polygon>
                                        <polygon
                                            points="46.75 0 41.95 15.58 32.67 15.58 37.47 0 46.75 0"
                                            fill="url(#New_Gradient_Swatch_39-2)"
                                        ></polygon>
                                        <polygon
                                            points="35.95 35.06 34.75 38.96 25.47 38.96 26.67 35.06 35.95 35.06"
                                            fill="url(#New_Gradient_Swatch_39-3)"
                                        ></polygon>
                                        <path
                                            d="M154.48,138.63l-2.4,7.79-1.16,3.77-1,3.38-3.64,11.8-.1.32-.06.21h-6.36a2.11,2.11,0,0,1-2.24-2,1.74,1.74,0,0,1,.05-.39l.06-.19,1.61-5.24,2.38-7.72,1.22-4,2.41-7.79Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="url(#New_Gradient_Swatch_39-4)"
                                        ></path>
                                    </g>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <path
                                            d="M179.07,153.82a17.46,17.46,0,0,0-.8-3.53c-.33-.76-.48-1-1.58-1H175.5v16.92c0,3,.19,3.24,1.84,3.49V171h-6.17v-1.34c1.58-.25,1.75-.46,1.75-3.49V149.24h-1.14c-1,0-1.34.33-1.69,1.19a21.94,21.94,0,0,0-.76,3.42h-.71c.13-2.63.26-5.43.3-7.16h.56c.28.83.5.9,1.06.9H178c.5,0,.76-.22,1.08-.9h.54c0,1.51.09,4.68.19,7Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M190.93,164.65c-.15,1.55-.67,5.36-.83,6.34h-9.22v-1.34c1.63-.21,1.78-.46,1.78-3.49V152.45c0-3-.18-3.31-1.58-3.53v-1.33h5.8v1.33c-1.45.25-1.63.5-1.63,3.53v14c0,2,0,2.88,1.05,2.92a7.63,7.63,0,0,0,1,0c1.06,0,1.34-.44,1.79-1.41a21.56,21.56,0,0,0,1.17-3.74Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M202.17,171v-1.23c.74-.21.87-.36.87-2.55V161c0-3-.73-3.53-1.3-3.53-.37,0-.8.22-1.38,1.12,0,.43,0,1,0,1.51v7.27c0,2,0,2.2.91,2.41V171h-4.18v-1.23c.82-.21.89-.32.89-2.41V160.8c0-2.56-.52-3.38-1.21-3.38-.46,0-.91.32-1.43,1.08v8.85c0,2,.11,2.2.8,2.41V171h-4.26v-1.23c1-.25,1.08-.39,1.08-2.55v-7.63c0-2,0-2.34-.89-2.6v-1.15a11.81,11.81,0,0,0,3.27-1.37v2.7c.41-.54.74-1,1.13-1.47.58-.69,1-1.12,1.58-1.12,1,0,1.73,1.08,2.09,2.74.44-.65.81-1.15,1.28-1.77a2.19,2.19,0,0,1,1.49-1c1.61,0,2.47,2.13,2.47,5.8v7c0,2,.09,2.12,1,2.41V171Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M212,154.57c2.63,0,4.28,3.82,4.28,8.14,0,5.79-2.16,8.71-4.35,8.71-2.81,0-4.41-4.11-4.41-8.32C207.54,157.6,209.89,154.57,212,154.57Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M211.8,156c-.8,0-1.58,1.62-1.58,6.05s.76,7.88,1.93,7.88c.71,0,1.47-.93,1.47-6.19C213.62,158.75,213,156,211.8,156Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M221.36,155.26a2.18,2.18,0,0,1,1.32-.69c2.27,0,3.77,3.57,3.77,7.6,0,5.11-2.17,9.25-4.89,9.25a5.34,5.34,0,0,1-3.3-1.3c0-.86,0-1.87,0-2.77V150.68c0-2.05-.11-2.34-1.15-2.48V147a14.58,14.58,0,0,0,3.55-1.23v10.12Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M220.67,167a7.18,7.18,0,0,0,.11,1.22c.11.54.64,1.66,1.32,1.66,1,0,1.71-2.13,1.71-6.56,0-4.6-1.17-6.4-2.28-6.4a1.65,1.65,0,0,0-.86.25Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M227.55,171v-1.23c1-.25,1.12-.39,1.12-2.95v-7c0-2.41-.09-2.55-1-2.77v-1.19a12.51,12.51,0,0,0,3.37-1.29v12.27c0,2.45.07,2.7,1.15,2.95V171Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M229.73,152.34c-.71,0-1.34-1.15-1.34-2.56s.63-2.55,1.36-2.55,1.34,1.08,1.34,2.55S230.49,152.34,229.73,152.34Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M233,171v-1.23c1.05-.32,1.09-.5,1.09-2.77V150.61c0-1.87-.11-2.09-1.08-2.48V147a11.21,11.21,0,0,0,3.48-1.23V167c0,2.38.06,2.52,1.12,2.77V171Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M245.91,167.46c-1.14,3.24-2.63,4-3.41,4-2.49,0-3.9-3.57-3.9-7.85a15,15,0,0,1,1.39-6.48c.84-1.62,1.88-2.52,2.9-2.52,1.83,0,3.09,2.92,3.07,5.87,0,.61,0,1.22-.24,1.33a35.72,35.72,0,0,1-4.78.58c.08,3.81,1.17,5.76,2.51,5.76.73,0,1.45-.51,2.12-1.62Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M242.52,156.05c-.74,0-1.37,1.69-1.48,4.53l2.24-.1c.26,0,.38-.11.38-.72C243.67,158,243.25,156.05,242.52,156.05Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M252.3,159.68c-.48-2.52-1.11-3.67-2-3.67-.52,0-1,.72-1,1.91a3.26,3.26,0,0,0,1.43,2.77,6.12,6.12,0,0,1,2.53,5.36c0,3.6-1.77,5.37-3.39,5.37a4,4,0,0,1-2.36-1.08c-.07-.83-.24-3.31-.29-4.57l.61-.22c.39,2.27,1.15,4.39,2.36,4.39.71,0,1.06-.83,1.06-1.87a3.69,3.69,0,0,0-1.43-3,6.48,6.48,0,0,1-2.42-5.4c0-2.85,1.21-5.08,3.18-5.08a4.88,4.88,0,0,1,2,.54c0,1,.22,3.28.3,4.25Z"
                                            transform="translate(-124.04 -130.84)"
                                            fill="#fff"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <h3 className="regis-title">Đăng nhập</h3>
                    </div>

                    <a href="/" className="regis-help">
                        Bạn cần giúp đỡ?
                    </a>
                </div>
            </div>

            <div className="regis-form">
                <form action="" method="POST" className="form" id="form-1">
                    <h3 className="heading-form">Đăng nhập</h3>

                    <div className="regis-span">
                        Bạn chưa có tài khoản?{' '}
                        <a href="/register" className="regis-span__login">
                            Đăng ký
                        </a>
                    </div>

                    <div className="spacer"></div>
                    {err && <p className="error-message">{err}</p>}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="VD: email@domain.com"
                            className="form-control"
                            onChange={handleChange}
                        />
                        <span className="form-message"></span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            className="form-control"
                            onChange={handleChange}
                        />
                        <span className="form-message"></span>
                    </div>

                    <button onClick={handleSubmit} className="form-submit">
                        Đăng nhập
                    </button>

                    <div className="regis-span">
                        <a href="/register" className="regis-span__login">
                            Quên mật khẩu?
                        </a>
                    </div>

                    <div className="form-choose">
                        <div className="form-choose-lr"></div>
                        <span className="form-chose-title">hoặc</span>
                        <div className="form-choose-lr"></div>
                    </div>

                    <div className="regis-social">
                        <button className="regis-social__btn regis-fb">
                            <div className="regis-social__icon">
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div>Facebook</div>
                        </button>
                        <button className="regis-social__btn regis-gg">
                            <div className="regis-social__icon">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 48 48"
                                    className="abcRioButtonSvg"
                                >
                                    <g>
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                        ></path>
                                        <path
                                            fill="#4285F4"
                                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                        ></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                        ></path>
                                        <path
                                            fill="#34A853"
                                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                        ></path>
                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div>Google</div>
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Login;
