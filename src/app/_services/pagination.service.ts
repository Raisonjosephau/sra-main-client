import { Injectable } from '@angular/core';

import {Page} from '../_objects/page'
import {PagedData} from '../_objects/page-data'

@Injectable({
    providedIn: 'root',
})

export class PaginationService {

    constructor() { }

    getHeroes(pageData: PagedData) {
      // TODO: send the message _after_ fetching the heroes
        const pData = new PagedData();
        const page = pageData.page;
        const data = pageData.data
        page.totalElements = data.length;
        page.totalPages = page.totalElements / page.size;
        pageData.page = page;
        const start = page.pageNumber * page.size;
        const end = Math.min((start + page.size), page.totalElements);
        for (let i = start; i < end; i++) {
            pData.data.push(data[i]);
        }
        pData.page = page;
        return pData;
    }
  }
