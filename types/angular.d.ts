/// <reference types="jasmine" />
import { Type } from '@angular/core';
import { ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
export declare function setupComponentTest(moduleDef: TestModuleMetadata): void;
export declare function configureComponentTestEnvironment(moduleDef: TestModuleMetadata): void;
export declare function mergeModuleDefs(...moduleDefs: TestModuleMetadata[]): TestModuleMetadata;
export declare function createComponent<T>(component: Type<T>): ComponentFixture<T>;
export declare function expectComponent<T>(fixture: ComponentFixture<T>): jasmine.Matchers<T>;
export declare function expectElementFromFixture<T>(fixture: ComponentFixture<T>, domQuery?: string): jasmine.Matchers<{}>;
export declare function expectElementsFromFixture<T>(fixture: ComponentFixture<T>, domQuery: string): jasmine.ArrayLikeMatchers<{}>;
export declare function expectFormElementFromFixture<T>(fixture: ComponentFixture<T>, formControlName: string): jasmine.Matchers<{}>;
export declare function expectViewChildFromFixture<T>(fixture: ComponentFixture<T>, viewChildProperty: string): jasmine.Matchers<{}>;
export declare function componentFromFixture<T>(fixture: ComponentFixture<T>): T;
export declare function viewChildFromFixture<T>(fixture: ComponentFixture<T>, viewChildProperty: string): Element;
export declare function formElementFromFixture<T>(fixture: ComponentFixture<T>, formControlName: string): Element;
export declare function elementFromFixture<T>(fixture: ComponentFixture<T>, domQuery?: string): Element;
export declare function childComponentsFromFixture<T>(fixture: ComponentFixture<{}>, domQuery: string): T[];
export declare function elementsFromFixture<T>(fixture: ComponentFixture<T>, domQuery: string): Element[];
export declare function configureTestEnvironment(moduleDef: TestModuleMetadata): typeof TestBed;
