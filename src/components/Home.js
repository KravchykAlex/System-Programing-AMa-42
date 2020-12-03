import React, { useState } from 'react';
import '../assets/css/home.css';

export default function Home() {
    const [flip, setFlip] = useState(false);

    const flipHandler = () => {
        setFlip(!flip);
    }

    return (
        <div className="home-container">
            <div className="card-container">

                <div className="card">
                    <h4>Queue</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi maiores sequi recusandae deserunt adipisci possimus obcaecati molestiae, voluptatibus distinctio a harum dicta nulla assumenda dolor temporibus cupiditate quibusdam. Asperiores quaerat vero tenetur quos maxime. Rem distinctio fugit quasi aut eius ab, sapiente eaque neque. Adipisci, labore dolore quas accusamus ratione dolorum voluptatibus tempora magni veniam officiis. Quisquam suscipit voluptate dicta veritatis. Ducimus enim molestiae vitae beatae, rerum eum magnam nihil! Architecto cupiditate nemo impedit, asperiores molestiae, beatae cum praesentium aut ex sint excepturi nam tempora porro quos rem nesciunt repudiandae ipsam perferendis nihil saepe provident. Unde ratione aliquid provident?</p>
                </div>

                <div className="card">
                    <h4>Egyptian Fraction</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi maiores sequi recusandae deserunt adipisci possimus obcaecati molestiae, voluptatibus distinctio a harum dicta nulla assumenda dolor temporibus cupiditate quibusdam. Asperiores quaerat vero tenetur quos maxime. Rem distinctio fugit quasi aut eius ab, sapiente eaque neque. Adipisci, labore dolore quas accusamus ratione dolorum voluptatibus tempora magni veniam officiis. Quisquam suscipit voluptate dicta veritatis. Ducimus enim molestiae vitae beatae, rerum eum magnam nihil! Architecto cupiditate nemo impedit, asperiores molestiae, beatae cum praesentium aut ex sint excepturi nam tempora porro quos rem nesciunt repudiandae ipsam perferendis nihil saepe provident. Unde ratione aliquid provident?</p>
                        
                </div>

                <div className="card">
                    <h4>Binary Search</h4>                    
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi maiores sequi recusandae deserunt adipisci possimus obcaecati molestiae, voluptatibus distinctio a harum dicta nulla assumenda dolor temporibus cupiditate quibusdam. Asperiores quaerat vero tenetur quos maxime. Rem distinctio fugit quasi aut eius ab, sapiente eaque neque. Adipisci, labore dolore quas accusamus ratione dolorum voluptatibus tempora magni veniam officiis. Quisquam suscipit voluptate dicta veritatis. Ducimus enim molestiae vitae beatae, rerum eum magnam nihil! Architecto cupiditate nemo impedit, asperiores molestiae, beatae cum praesentium aut ex sint excepturi nam tempora porro quos rem nesciunt repudiandae ipsam perferendis nihil saepe provident. Unde ratione aliquid provident?</p>
                    
                </div>

                <div className="card">
                    <h4>Fibonacci</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi maiores sequi recusandae deserunt adipisci possimus obcaecati molestiae, voluptatibus distinctio a harum dicta nulla assumenda dolor temporibus cupiditate quibusdam. Asperiores quaerat vero tenetur quos maxime. Rem distinctio fugit quasi aut eius ab, sapiente eaque neque. Adipisci, labore dolore quas accusamus ratione dolorum voluptatibus tempora magni veniam officiis. Quisquam suscipit voluptate dicta veritatis. Ducimus enim molestiae vitae beatae, rerum eum magnam nihil! Architecto cupiditate nemo impedit, asperiores molestiae, beatae cum praesentium aut ex sint excepturi nam tempora porro quos rem nesciunt repudiandae ipsam perferendis nihil saepe provident. Unde ratione aliquid provident?</p>
                    
                </div>

                <div className="card">
                    <h4>Merge Sort</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi maiores sequi recusandae deserunt adipisci possimus obcaecati molestiae, voluptatibus distinctio a harum dicta nulla assumenda dolor temporibus cupiditate quibusdam. Asperiores quaerat vero tenetur quos maxime. Rem distinctio fugit quasi aut eius ab, sapiente eaque neque. Adipisci, labore dolore quas accusamus ratione dolorum voluptatibus tempora magni veniam officiis. Quisquam suscipit voluptate dicta veritatis. Ducimus enim molestiae vitae beatae, rerum eum magnam nihil! Architecto cupiditate nemo impedit, asperiores molestiae, beatae cum praesentium aut ex sint excepturi nam tempora porro quos rem nesciunt repudiandae ipsam perferendis nihil saepe provident. Unde ratione aliquid provident?</p>
                    
                </div>

            </div>
        </div>
    )
}
