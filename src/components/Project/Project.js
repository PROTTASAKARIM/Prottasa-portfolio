import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ projects }) => {
    const { id, img, name, live, gitc, gits } = projects;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/projects/${id}`)
    }
    return (
        <div className='lg:ml-20'>
            <div class="card w-96 bg-base-100 shadow-xl shadow-pink-600 border border-pink-500 my-10">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>What to see more? <button onClick={() => handleDetails()} className='btn btn-ghost'>Details</button></p>

                    <div class="card-actions">
                        <a href={live} target="_blank"><button class="btn btn-primary">live</button></a>
                        <a href={gitc} target="_blank"><button class="btn btn-primary">gitc</button></a>
                        {
                            gits ? <a href={gits} target="_blank"><button class="btn btn-primary">gits</button></a> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;