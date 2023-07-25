import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showLeftColumn, setShowLeftColumn] = React.useState(true);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setShowLeftColumn(false);
        } else {
            setShowLeftColumn(true);
        }
    };

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex">
            {showLeftColumn && (
                <div className="w-3/6 bg-primary text-white bg-leftbg p-10" id='kiri-info'>
                    <div>
                        <h2 className="text-3xl font-semibold mb-2">Get started for free</h2>
                        <p className="text-xl">No credit card required!</p>
                    </div>
                    <div className="mt-10 ml-16">
                        <h2 className="text-2xl mb-4">Manage Your Data</h2>
                        <p>
                            Use official API clients, integrations, CLI tool, or REST API to create & update
                            your indexed data.
                        </p>
                    </div>
                    <div className="mt-10 ml-16">
                        <h2 className="text-2xl mb-4">Build UI</h2>
                        <p>
                            Create beautiful UI with pre-built component libraries for instant search and
                            autocomplete.
                        </p>
                    </div>
                    <div className="mt-10 ml-16">
                        <h2 className="text-2xl mb-4">Configure Analytics</h2>
                        <p>
                            Optimize and evaluate how your search is performing, keywords with no results, and
                            recommendations.
                        </p>
                    </div>
                </div>
            )}

            <div className={showLeftColumn ? "w-full" : "w-full pl-10 pr-10"} id='kanan-form'>
                {children}
            </div>
        </div>
    );
};

export default Layout;
