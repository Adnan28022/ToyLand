import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
    return (
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
            <Link to="/admin/dashboard" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                <Home size={12} /> Dashboard
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight size={12} className="text-slate-300" />
                    {item.path ? (
                        <Link to={item.path} className="hover:text-purple-600 transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-slate-800">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumbs;