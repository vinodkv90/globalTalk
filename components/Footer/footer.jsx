"use client"
import styles from './footer.module.scss'
import { useNextFetch } from '@/customHooks/useNextFetch';
import Link from 'next/link';
import IcoMoon from '../IcoMoon';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Footer = () => {

    const [parsedData, setParsedData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await useNextFetch('/api/footer');
            const parsed = JSON.parse(data);
            setParsedData(parsed);
        } catch (error) {
            console.error('Error in useHeader:', error);
        }
        };

        fetchData();
    }, []);
    
    const pathname = usePathname()

    const hasFooter = pathname !== '/authentication'
  
    return (
        hasFooter && <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles?.footerLinksWrap}>
                            <div className={styles?.footerLinks}>
                                {
                                    parsedData?.links && parsedData?.links?.length > 0 && parsedData?.links?.map(item => {
                                        return (
                                            <Link href={item?.url} key={item?.id}>{item?.title}</Link>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles?.footerLinks}>
                                {
                                    parsedData?.team && parsedData?.team?.length > 0 && parsedData?.team?.map(item => {
                                        return (
                                            <span key={item?.id}>{item?.name}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.line} />
                    </div>
                    <div className={styles.copyrightWrap}>
                        <div className={styles?.iconList}>
                            {
                                parsedData?.iconList && parsedData?.iconList?.length > 0 && parsedData?.iconList?.map(item => {
                                    return (
                                        <Link href={item?.url} key={item?.id}>
                                            <IcoMoon icon={item?.icon} size={20} color="currentColor" />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <p className={styles.copyright}>© {new Date(Date.now()).getFullYear()} {parsedData?.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer