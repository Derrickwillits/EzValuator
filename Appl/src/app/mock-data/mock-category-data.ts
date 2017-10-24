import { CategoryRow } from '../objects/category-row';
import { CategoryDetail } from '../objects/category-detail';

export const CATEGORYDATA: CategoryRow[] = [
    {id: 1, name: 'Revenue', details: [
        {year: 2016, value: 1000000},
        {year: 2015, value: 1000000},
        {year: 2014, value: 1000000},
    ]},
    {id: 2, name: 'COGS', details: [
        {year: 2016, value: 500000},
        {year: 2015, value: 500000},
        {year: 2014, value: 500000},
    ]},
]