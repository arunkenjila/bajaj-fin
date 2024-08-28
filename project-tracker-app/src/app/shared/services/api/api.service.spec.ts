import { TestBed } from "@angular/core/testing";

import { ApiService } from "./api.service";
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";

describe("ApiService", () => {
    let service: ApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(ApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should call getProjects", () => {
        service.getProjects().subscribe(() => {});
        const request = httpMock.expectOne("./assets/db.json");
        expect(request.request.method).toBe("GET");
    });
});
