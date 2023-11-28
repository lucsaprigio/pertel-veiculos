'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
    currentPage?: string;
    countPages?: number;
}

export function CountPagesButton({ currentPage, countPages }: Props) {
    const searchParams = useSearchParams()

    currentPage = searchParams.get('page');

    function renderPageNumbers() {
        const totalPagesToShow = 5;

        // Caso especial: Se houver menos de 5 páginas, exiba todas
        if (countPages <= totalPagesToShow) {
            return Array.from({ length: countPages }, (_, index) => renderPageButton(index + 1));
        }

        // Páginas antes e depois da página atual
        const pagesBefore = Math.min(totalPagesToShow - 1, Math.floor(totalPagesToShow / 2));
        const pagesAfter = totalPagesToShow - 1 - pagesBefore;

        let startPage = Math.max(1, parseInt(currentPage) - pagesBefore);
        let endPage = Math.min(parseInt(currentPage) + pagesAfter, countPages);

        // Se a página atual estiver próxima ao início, ajuste o final
        if (startPage === 1) {
            endPage = totalPagesToShow;
        }

        // Se a página atual estiver próxima ao final, ajuste o início
        if (endPage === countPages) {
            startPage = Math.max(1, countPages - totalPagesToShow + 1);
        }

        const pages = [];
        if (startPage > 1) {
            pages.push(renderPageButton(1));
            if (startPage > 2) {
                pages.push(renderEllipsis());
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(renderPageButton(i));
        }

        if (endPage < countPages) {
            if (endPage < countPages - 1) {
                pages.push(renderEllipsis());
            }
            pages.push(renderPageButton(countPages));
        }

        return pages;
    };

    function renderPageButton(pageNumber: number) {
        return (
            <Link
                href={`/veiculos?page=${pageNumber}`}
                key={pageNumber}
                className={`flex items-center justify-center w-8 h-8 rounded-md border-red-700 border-b-sm hover:bg-red-700 hover:text-gray-50 transition-all duration-150 ${parseInt(currentPage) === pageNumber && 'bg-red-700 text-gray-50'}`}
            >
                {pageNumber}
            </Link>
        )
    };

    function renderEllipsis() {
        return (
            <span key="ellipsis" className="mx-2">
                ...
            </span>
        )
    };

    return (
        <div className="w-full flex items-center justify-center mb-10">
            {
                renderPageNumbers()
            }
        </div >
    )
}