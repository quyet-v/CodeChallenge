import { TestBed } from "@angular/core/testing";
import { type CanActivateFn } from "@angular/router";

import { adminGuard } from "./admin.guard";

describe("adminGuard", () => {
    const executeGuard: CanActivateFn = async (...guardParameters) =>
        await TestBed.runInInjectionContext(async () => await adminGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it("should be created", () => {
        expect(executeGuard).toBeTruthy();
    });
});
