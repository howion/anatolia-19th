/* Generated by Microsoft's dts-gen */
/* eslint-disable */

export declare function citation_js(data: any, opts: any): any

export declare namespace citation_js {
    const version: {
        cite: string
        citeproc: string
    }

    function async(data: any, options: any, callback: any): any
    function input(args: any): any
    function inputAsync(args: any): any
    function validateOptions(options: any): any
    function validateOutputOptions(options: any): any

    namespace CSL {
        function engine(style: any, lang: any, template: any, retrieveItem: any, retrieveLocale: any): any
        function item(...args: any[]): void
        function locale(...args: any[]): void
        function style(...args: any[]): void
        namespace register {
            function addLocale(): any
            function addTemplate(): any
            function getLocale(p0: any): any
            function getTemplate(p0: any): any
            function hasLocale(p0: any): any
            function hasTemplate(p0: any): any
        }
    }

    namespace get {
        const register: {
            data: {
                biblatex: any
                bibliography: any
                bibtex: any
                bibtxt: any
                citation: any
                data: any
                label: any
                ndjson: any
                ris: any
            }
        }

        function add(name: any, formatter: any): void
        function bibtxt(src: any, dict: any): any
        function date(date: any, delimiter: any): any
        function format(name: any, data: any, options: any): any
        function has(name: any): any
        function json(...args: any[]): void
        function label(...args: any[]): void
        function list(): any
        function name(name: any, reversed: any): any
        function remove(name: any): void

        namespace bibtex {
            function json(...args: any[]): void
            function label(...args: any[]): void
            function text(...args: any[]): void
            function type(...args: any[]): void
        }

        namespace dict {
            const htmlDict: {
                en_end: string
                en_start: string
                li_end: string
                li_start: string
                ul_end: string
                ul_start: string
                wr_end: string
                wr_start: string
            }

            const register: {
                data: {
                    html: {
                        bibliographyContainer: { '0': string; '1': string }
                        entry: { '0': string; '1': string }
                        list: { '0': string; '1': string }
                        listItem: { '0': string; '1': string }
                    }
                    text: {
                        bibliographyContainer: { '0': string; '1': string }
                        entry: { '0': string; '1': string }
                        list: { '0': string; '1': string }
                        listItem: { '0': string; '1': string }
                    }
                }
            }

            const textDict: {
                en_end: string
                en_start: string
                li_end: string
                li_start: string
                ul_end: string
                ul_start: string
                wr_end: string
                wr_start: string
            }

            function add(name: any, dict: any): void
            function get(name: any): any
            function has(name: any): any
            function list(): any
            function remove(name: any): void
        }
    }

    namespace parse {
        const typeMatcher: any

        function add(format: any, parsers: any): void
        function addDataParser(format: any, { parser, async }: any): void
        function addTypeParser(format: any, { dataType, predicate, extends: extend }: any): void
        function bibjson(data: any): any
        function chain(args: any): any
        function chainAsync(args: any): any
        function chainLink(input: any): any
        function chainLinkAsync(input: any): any
        function csl(data: any, bestGuessConversions: any): any
        function data(input: any, type: any): any
        function dataAsync(input: any, type: any): any
        function date(value: any): any
        function get(format: any): any
        function has(format: any): void
        function hasDataParser(type: any, async: any): void
        function hasTypeParser(type: any): void
        function json(str: any): any
        function list(): void
        function listDataParser(async: any): void
        function listTypeParser(): void
        function name(name: any): any
        function remove(format: any): void
        function removeDataParser(type: any, async: any): void
        function removeTypeParser(type: any): void
        function treeTypeParser(): any
        function type(input: any): any

        namespace bibtex {
            function json(...args: any[]): void
            function prop(...args: any[]): void
            function text(...args: any[]): void
            function type(...args: any[]): void
        }

        namespace bibtxt {
            function text(src: any): void
            function textEntry(entry: any): any
        }

        namespace doi {
            function api(data: any): void
            function id(data: any): any
            namespace async {
                function api(data: any): any
            }
        }

        namespace input {
            function chain(args: any): any
            function chainAsync(args: any): any
            function chainLink(input: any): any
            function chainLinkAsync(input: any): any
            function data(input: any, type: any): any
            function dataAsync(input: any, type: any): any
            function type(input: any): any
            namespace async {
                function chain(args: any): any
                function chainLink(input: any): any
                function data(input: any, type: any): any
            }
        }

        namespace util {
            class DataParser {
                constructor(...args: any[])
                validate(...args: any[]): void
            }

            class FormatParser {
                constructor(...args: any[])
                validate(...args: any[]): void
                validateFormat(...args: any[]): void
            }

            class TypeParser {
                constructor(...args: any[])
                getCombinedPredicate(...args: any[]): void
                getDataType(...args: any[]): void
                parseElementConstraint(...args: any[]): void
                parsePredicate(...args: any[]): void
                parsePropertyConstraint(...args: any[]): void
                parseTokenList(...args: any[]): void
                validate(...args: any[]): void
                validateDataType(...args: any[]): void
                validateElementConstraint(...args: any[]): void
                validateExtends(...args: any[]): void
                validateParseType(...args: any[]): void
                validatePropertyConstraint(...args: any[]): void
                validateTokenList(...args: any[]): void
            }

            function applyGraph(entry: any, graph: any): any
            function dataTypeOf(thing: any): any
            function removeGraph(entry: any): any
            function typeOf(thing: any): any
        }

        namespace wikidata {
            function json({ entities }: any): any
            function list(data: any, langs: any): any
            function prop(prop: any, value: any, entity: any): any
            function type(type: any): any

            namespace async {
                function json({ entities }: any): any
                function prop(...args: any[]): void
            }
        }
    }

    namespace plugins {
        function add(ref: any, plugins: any): void
        function has(ref: any): void
        function list(): void
        function remove(ref: any): void

        namespace config {
            function add(ref: any, config: any): void
            function get(ref: any): void
            function has(ref: any): void
            function list(): void
            function remove(ref: any): void
        }

        namespace dict {
            const htmlDict: {
                en_end: string
                en_start: string
                li_end: string
                li_start: string
                ul_end: string
                ul_start: string
                wr_end: string
                wr_start: string
            }

            const register: {
                data: {
                    html: {
                        bibliographyContainer: { '0': string; '1': string }
                        entry: { '0': string; '1': string }
                        list: { '0': string; '1': string }
                        listItem: { '0': string; '1': string }
                    }
                    text: {
                        bibliographyContainer: { '0': string; '1': string }
                        entry: { '0': string; '1': string }
                        list: { '0': string; '1': string }
                        listItem: { '0': string; '1': string }
                    }
                }
            }

            const textDict: {
                en_end: string
                en_start: string
                li_end: string
                li_start: string
                ul_end: string
                ul_start: string
                wr_end: string
                wr_start: string
            }

            function add(name: any, dict: any): void
            function get(name: any): any
            function has(name: any): any
            function list(): any
            function remove(name: any): void
        }

        namespace input {
            const typeMatcher: {}

            function add(format: any, parsers: any): void
            function addDataParser(format: any, { parser, async }: any): void
            function addTypeParser(format: any, { dataType, predicate, extends: extend }: any): void
            function chain(args: any): any
            function chainAsync(args: any): any
            function chainLink(input: any): any
            function chainLinkAsync(input: any): any
            function data(input: any, type: any): any
            function dataAsync(input: any, type: any): any
            function get(format: any): any
            function has(format: any): void
            function hasDataParser(type: any, async: any): void
            function hasTypeParser(type: any): void
            function list(): void
            function listDataParser(async: any): void
            function listTypeParser(): void
            function remove(format: any): void
            function removeDataParser(type: any, async: any): void
            function removeTypeParser(type: any): void
            function treeTypeParser(): any
            function type(input: any): any

            namespace util {
                class DataParser {
                    constructor(...args: any[])
                    validate(...args: any[]): void
                }

                class FormatParser {
                    constructor(...args: any[])
                    validate(...args: any[]): void
                    validateFormat(...args: any[]): void
                }

                class TypeParser {
                    constructor(...args: any[])
                    getCombinedPredicate(...args: any[]): void
                    getDataType(...args: any[]): void
                    parseElementConstraint(...args: any[]): void
                    parsePredicate(...args: any[]): void
                    parsePropertyConstraint(...args: any[]): void
                    parseTokenList(...args: any[]): void
                    validate(...args: any[]): void
                    validateDataType(...args: any[]): void
                    validateElementConstraint(...args: any[]): void
                    validateExtends(...args: any[]): void
                    validateParseType(...args: any[]): void
                    validatePropertyConstraint(...args: any[]): void
                    validateTokenList(...args: any[]): void
                }

                function applyGraph(entry: any, graph: any): any
                function dataTypeOf(thing: any): any
                function removeGraph(entry: any): any
                function typeOf(thing: any): any
            }
        }

        namespace output {
            const register: {
                data: {
                    biblatex: any
                    bibliography: any
                    bibtex: any
                    bibtxt: any
                    citation: any
                    data: any
                    label: any
                    ndjson: any
                    ris: any
                }
            }

            function add(name: any, formatter: any): void
            function format(name: any, data: any, options: any): any
            function has(name: any): any
            function list(): any
            function remove(name: any): void
        }
    }

    namespace util {
        class Grammar {
            constructor(...args: any[])
            consumeRule(...args: any[]): void
            consumeToken(...args: any[]): void
            matchEndOfFile(...args: any[]): void
            matchToken(...args: any[]): void
            parse(...args: any[]): void
        }

        class Register {
            constructor(...args: any[])
            add(...args: any[]): void
            delete(...args: any[]): void
            get(...args: any[]): void
            has(...args: any[]): void
            list(...args: any[]): void
            remove(...args: any[]): void
            set(...args: any[]): void
        }

        class TokenStack {
            constructor(...args: any[])
            consume(...args: any[]): void
            consumeN(...args: any[]): void
            consumeSequence(...args: any[]): void
            consumeToken(...args: any[]): void
            consumeWhitespace(...args: any[]): void
            matches(...args: any[]): void
            matchesSequence(...args: any[]): void
            tokensLeft(...args: any[]): void
            static getMatchCallback(...args: any[]): void
            static getPatternText(...args: any[]): void
        }

        function Translator(...args: any[]): void
        function deepCopy(value: any, seen: any): any
        function fetchFile(url: any, opts: any): any
        function fetchFileAsync(url: any, opts: any): any
        function fetchId(list: any, prefix: any): any
        function setUserAgent(newUserAgent: any): void

        namespace Translator {
            const CONVERT_TO_SOURCE: any
            const CONVERT_TO_TARGET: any
        }

        namespace attr {
            function getAttributedEntry(...args: any[]): void
            function getPrefixedEntry(...args: any[]): void
            function getWrappedEntry(...args: any[]): void
        }
    }
}
