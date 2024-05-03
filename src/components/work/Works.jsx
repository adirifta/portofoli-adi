import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [showAll, setShowAll] = useState(false); // Menyimpan status untuk menampilkan semua item

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    // Menentukan jumlah item yang akan ditampilkan berdasarkan showAll
    const maxItemsToShow = showAll ? projects.length : 4;

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    // Fungsi untuk menampilkan semua item
    const handleViewMore = () => {
        setShowAll(true);
    };

    return (
        <div>
            <div className="work_filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => { handleClick(e, index); }}
                            className={`${active === index ? 'active-work' : ""} work_item`}
                            key={index}>
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work_container container grid">
                {projects.slice(0, maxItemsToShow).map((item) => {
                    return <WorkItems item={item} key={item.id} />;
                })}
            </div>

            {/* Menampilkan opsi "View More" jika belum menampilkan semua item */}
            {!showAll && (
                <div className="view-more-container">
                    <button onClick={handleViewMore} className="view-more-button">
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Works;