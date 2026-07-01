import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DocumentBlock
 *
 */
export type DocumentBlockModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentBlockPayload>;
export type AggregateDocumentBlock = {
    _count: DocumentBlockCountAggregateOutputType | null;
    _avg: DocumentBlockAvgAggregateOutputType | null;
    _sum: DocumentBlockSumAggregateOutputType | null;
    _min: DocumentBlockMinAggregateOutputType | null;
    _max: DocumentBlockMaxAggregateOutputType | null;
};
export type DocumentBlockAvgAggregateOutputType = {
    position: number | null;
};
export type DocumentBlockSumAggregateOutputType = {
    position: number | null;
};
export type DocumentBlockMinAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    type: string | null;
    position: number | null;
    parentBlockId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentBlockMaxAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    type: string | null;
    position: number | null;
    parentBlockId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentBlockCountAggregateOutputType = {
    id: number;
    documentId: number;
    type: number;
    content: number;
    position: number;
    parentBlockId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DocumentBlockAvgAggregateInputType = {
    position?: true;
};
export type DocumentBlockSumAggregateInputType = {
    position?: true;
};
export type DocumentBlockMinAggregateInputType = {
    id?: true;
    documentId?: true;
    type?: true;
    position?: true;
    parentBlockId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentBlockMaxAggregateInputType = {
    id?: true;
    documentId?: true;
    type?: true;
    position?: true;
    parentBlockId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentBlockCountAggregateInputType = {
    id?: true;
    documentId?: true;
    type?: true;
    content?: true;
    position?: true;
    parentBlockId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DocumentBlockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentBlock to aggregate.
     */
    where?: Prisma.DocumentBlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentBlocks to fetch.
     */
    orderBy?: Prisma.DocumentBlockOrderByWithRelationInput | Prisma.DocumentBlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DocumentBlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentBlocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentBlocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DocumentBlocks
    **/
    _count?: true | DocumentBlockCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DocumentBlockAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DocumentBlockSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DocumentBlockMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DocumentBlockMaxAggregateInputType;
};
export type GetDocumentBlockAggregateType<T extends DocumentBlockAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentBlock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentBlock[P]> : Prisma.GetScalarType<T[P], AggregateDocumentBlock[P]>;
};
export type DocumentBlockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentBlockWhereInput;
    orderBy?: Prisma.DocumentBlockOrderByWithAggregationInput | Prisma.DocumentBlockOrderByWithAggregationInput[];
    by: Prisma.DocumentBlockScalarFieldEnum[] | Prisma.DocumentBlockScalarFieldEnum;
    having?: Prisma.DocumentBlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentBlockCountAggregateInputType | true;
    _avg?: DocumentBlockAvgAggregateInputType;
    _sum?: DocumentBlockSumAggregateInputType;
    _min?: DocumentBlockMinAggregateInputType;
    _max?: DocumentBlockMaxAggregateInputType;
};
export type DocumentBlockGroupByOutputType = {
    id: string;
    documentId: string;
    type: string;
    content: runtime.JsonValue;
    position: number;
    parentBlockId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DocumentBlockCountAggregateOutputType | null;
    _avg: DocumentBlockAvgAggregateOutputType | null;
    _sum: DocumentBlockSumAggregateOutputType | null;
    _min: DocumentBlockMinAggregateOutputType | null;
    _max: DocumentBlockMaxAggregateOutputType | null;
};
export type GetDocumentBlockGroupByPayload<T extends DocumentBlockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentBlockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentBlockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentBlockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentBlockGroupByOutputType[P]>;
}>>;
export type DocumentBlockWhereInput = {
    AND?: Prisma.DocumentBlockWhereInput | Prisma.DocumentBlockWhereInput[];
    OR?: Prisma.DocumentBlockWhereInput[];
    NOT?: Prisma.DocumentBlockWhereInput | Prisma.DocumentBlockWhereInput[];
    id?: Prisma.StringFilter<"DocumentBlock"> | string;
    documentId?: Prisma.StringFilter<"DocumentBlock"> | string;
    type?: Prisma.StringFilter<"DocumentBlock"> | string;
    content?: Prisma.JsonFilter<"DocumentBlock">;
    position?: Prisma.IntFilter<"DocumentBlock"> | number;
    parentBlockId?: Prisma.StringNullableFilter<"DocumentBlock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentBlock"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DocumentBlock"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
};
export type DocumentBlockOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    parentBlockId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    document?: Prisma.DocumentOrderByWithRelationInput;
};
export type DocumentBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DocumentBlockWhereInput | Prisma.DocumentBlockWhereInput[];
    OR?: Prisma.DocumentBlockWhereInput[];
    NOT?: Prisma.DocumentBlockWhereInput | Prisma.DocumentBlockWhereInput[];
    documentId?: Prisma.StringFilter<"DocumentBlock"> | string;
    type?: Prisma.StringFilter<"DocumentBlock"> | string;
    content?: Prisma.JsonFilter<"DocumentBlock">;
    position?: Prisma.IntFilter<"DocumentBlock"> | number;
    parentBlockId?: Prisma.StringNullableFilter<"DocumentBlock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentBlock"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DocumentBlock"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
}, "id">;
export type DocumentBlockOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    parentBlockId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentBlockCountOrderByAggregateInput;
    _avg?: Prisma.DocumentBlockAvgOrderByAggregateInput;
    _max?: Prisma.DocumentBlockMaxOrderByAggregateInput;
    _min?: Prisma.DocumentBlockMinOrderByAggregateInput;
    _sum?: Prisma.DocumentBlockSumOrderByAggregateInput;
};
export type DocumentBlockScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentBlockScalarWhereWithAggregatesInput | Prisma.DocumentBlockScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentBlockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentBlockScalarWhereWithAggregatesInput | Prisma.DocumentBlockScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DocumentBlock"> | string;
    documentId?: Prisma.StringWithAggregatesFilter<"DocumentBlock"> | string;
    type?: Prisma.StringWithAggregatesFilter<"DocumentBlock"> | string;
    content?: Prisma.JsonWithAggregatesFilter<"DocumentBlock">;
    position?: Prisma.IntWithAggregatesFilter<"DocumentBlock"> | number;
    parentBlockId?: Prisma.StringNullableWithAggregatesFilter<"DocumentBlock"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DocumentBlock"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DocumentBlock"> | Date | string;
};
export type DocumentBlockCreateInput = {
    id?: string;
    type: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position: number;
    parentBlockId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document: Prisma.DocumentCreateNestedOneWithoutBlocksInput;
};
export type DocumentBlockUncheckedCreateInput = {
    id?: string;
    documentId: string;
    type: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position: number;
    parentBlockId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBlockUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    parentBlockId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneRequiredWithoutBlocksNestedInput;
};
export type DocumentBlockUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    parentBlockId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBlockCreateManyInput = {
    id?: string;
    documentId: string;
    type: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position: number;
    parentBlockId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBlockUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    parentBlockId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBlockUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    parentBlockId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBlockListRelationFilter = {
    every?: Prisma.DocumentBlockWhereInput;
    some?: Prisma.DocumentBlockWhereInput;
    none?: Prisma.DocumentBlockWhereInput;
};
export type DocumentBlockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentBlockCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    parentBlockId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentBlockAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type DocumentBlockMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    parentBlockId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentBlockMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    parentBlockId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentBlockSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type DocumentBlockCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentBlockCreateWithoutDocumentInput, Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput> | Prisma.DocumentBlockCreateWithoutDocumentInput[] | Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentBlockCreateOrConnectWithoutDocumentInput | Prisma.DocumentBlockCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.DocumentBlockCreateManyDocumentInputEnvelope;
    connect?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
};
export type DocumentBlockUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentBlockCreateWithoutDocumentInput, Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput> | Prisma.DocumentBlockCreateWithoutDocumentInput[] | Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentBlockCreateOrConnectWithoutDocumentInput | Prisma.DocumentBlockCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.DocumentBlockCreateManyDocumentInputEnvelope;
    connect?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
};
export type DocumentBlockUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentBlockCreateWithoutDocumentInput, Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput> | Prisma.DocumentBlockCreateWithoutDocumentInput[] | Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentBlockCreateOrConnectWithoutDocumentInput | Prisma.DocumentBlockCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.DocumentBlockUpsertWithWhereUniqueWithoutDocumentInput | Prisma.DocumentBlockUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.DocumentBlockCreateManyDocumentInputEnvelope;
    set?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
    disconnect?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
    delete?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
    connect?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
    update?: Prisma.DocumentBlockUpdateWithWhereUniqueWithoutDocumentInput | Prisma.DocumentBlockUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.DocumentBlockUpdateManyWithWhereWithoutDocumentInput | Prisma.DocumentBlockUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.DocumentBlockScalarWhereInput | Prisma.DocumentBlockScalarWhereInput[];
};
export type DocumentBlockUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentBlockCreateWithoutDocumentInput, Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput> | Prisma.DocumentBlockCreateWithoutDocumentInput[] | Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentBlockCreateOrConnectWithoutDocumentInput | Prisma.DocumentBlockCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.DocumentBlockUpsertWithWhereUniqueWithoutDocumentInput | Prisma.DocumentBlockUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.DocumentBlockCreateManyDocumentInputEnvelope;
    set?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
    disconnect?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
    delete?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
    connect?: Prisma.DocumentBlockWhereUniqueInput | Prisma.DocumentBlockWhereUniqueInput[];
    update?: Prisma.DocumentBlockUpdateWithWhereUniqueWithoutDocumentInput | Prisma.DocumentBlockUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.DocumentBlockUpdateManyWithWhereWithoutDocumentInput | Prisma.DocumentBlockUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.DocumentBlockScalarWhereInput | Prisma.DocumentBlockScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DocumentBlockCreateWithoutDocumentInput = {
    id?: string;
    type: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position: number;
    parentBlockId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBlockUncheckedCreateWithoutDocumentInput = {
    id?: string;
    type: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position: number;
    parentBlockId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBlockCreateOrConnectWithoutDocumentInput = {
    where: Prisma.DocumentBlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentBlockCreateWithoutDocumentInput, Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput>;
};
export type DocumentBlockCreateManyDocumentInputEnvelope = {
    data: Prisma.DocumentBlockCreateManyDocumentInput | Prisma.DocumentBlockCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type DocumentBlockUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.DocumentBlockWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentBlockUpdateWithoutDocumentInput, Prisma.DocumentBlockUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.DocumentBlockCreateWithoutDocumentInput, Prisma.DocumentBlockUncheckedCreateWithoutDocumentInput>;
};
export type DocumentBlockUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.DocumentBlockWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentBlockUpdateWithoutDocumentInput, Prisma.DocumentBlockUncheckedUpdateWithoutDocumentInput>;
};
export type DocumentBlockUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.DocumentBlockScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentBlockUpdateManyMutationInput, Prisma.DocumentBlockUncheckedUpdateManyWithoutDocumentInput>;
};
export type DocumentBlockScalarWhereInput = {
    AND?: Prisma.DocumentBlockScalarWhereInput | Prisma.DocumentBlockScalarWhereInput[];
    OR?: Prisma.DocumentBlockScalarWhereInput[];
    NOT?: Prisma.DocumentBlockScalarWhereInput | Prisma.DocumentBlockScalarWhereInput[];
    id?: Prisma.StringFilter<"DocumentBlock"> | string;
    documentId?: Prisma.StringFilter<"DocumentBlock"> | string;
    type?: Prisma.StringFilter<"DocumentBlock"> | string;
    content?: Prisma.JsonFilter<"DocumentBlock">;
    position?: Prisma.IntFilter<"DocumentBlock"> | number;
    parentBlockId?: Prisma.StringNullableFilter<"DocumentBlock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentBlock"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DocumentBlock"> | Date | string;
};
export type DocumentBlockCreateManyDocumentInput = {
    id?: string;
    type: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position: number;
    parentBlockId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBlockUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    parentBlockId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBlockUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    parentBlockId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBlockUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    parentBlockId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBlockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    type?: boolean;
    content?: boolean;
    position?: boolean;
    parentBlockId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentBlock"]>;
export type DocumentBlockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    type?: boolean;
    content?: boolean;
    position?: boolean;
    parentBlockId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentBlock"]>;
export type DocumentBlockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    type?: boolean;
    content?: boolean;
    position?: boolean;
    parentBlockId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentBlock"]>;
export type DocumentBlockSelectScalar = {
    id?: boolean;
    documentId?: boolean;
    type?: boolean;
    content?: boolean;
    position?: boolean;
    parentBlockId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DocumentBlockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "documentId" | "type" | "content" | "position" | "parentBlockId" | "createdAt" | "updatedAt", ExtArgs["result"]["documentBlock"]>;
export type DocumentBlockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type DocumentBlockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type DocumentBlockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type $DocumentBlockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentBlock";
    objects: {
        document: Prisma.$DocumentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        documentId: string;
        type: string;
        content: runtime.JsonValue;
        position: number;
        parentBlockId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["documentBlock"]>;
    composites: {};
};
export type DocumentBlockGetPayload<S extends boolean | null | undefined | DocumentBlockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload, S>;
export type DocumentBlockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentBlockCountAggregateInputType | true;
};
export interface DocumentBlockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentBlock'];
        meta: {
            name: 'DocumentBlock';
        };
    };
    /**
     * Find zero or one DocumentBlock that matches the filter.
     * @param {DocumentBlockFindUniqueArgs} args - Arguments to find a DocumentBlock
     * @example
     * // Get one DocumentBlock
     * const documentBlock = await prisma.documentBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentBlockFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentBlockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentBlockClient<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DocumentBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentBlockFindUniqueOrThrowArgs} args - Arguments to find a DocumentBlock
     * @example
     * // Get one DocumentBlock
     * const documentBlock = await prisma.documentBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentBlockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentBlockClient<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DocumentBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBlockFindFirstArgs} args - Arguments to find a DocumentBlock
     * @example
     * // Get one DocumentBlock
     * const documentBlock = await prisma.documentBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentBlockFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentBlockFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentBlockClient<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DocumentBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBlockFindFirstOrThrowArgs} args - Arguments to find a DocumentBlock
     * @example
     * // Get one DocumentBlock
     * const documentBlock = await prisma.documentBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentBlockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentBlockClient<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DocumentBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentBlocks
     * const documentBlocks = await prisma.documentBlock.findMany()
     *
     * // Get first 10 DocumentBlocks
     * const documentBlocks = await prisma.documentBlock.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const documentBlockWithIdOnly = await prisma.documentBlock.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DocumentBlockFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DocumentBlock.
     * @param {DocumentBlockCreateArgs} args - Arguments to create a DocumentBlock.
     * @example
     * // Create one DocumentBlock
     * const DocumentBlock = await prisma.documentBlock.create({
     *   data: {
     *     // ... data to create a DocumentBlock
     *   }
     * })
     *
     */
    create<T extends DocumentBlockCreateArgs>(args: Prisma.SelectSubset<T, DocumentBlockCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentBlockClient<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DocumentBlocks.
     * @param {DocumentBlockCreateManyArgs} args - Arguments to create many DocumentBlocks.
     * @example
     * // Create many DocumentBlocks
     * const documentBlock = await prisma.documentBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DocumentBlockCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DocumentBlocks and returns the data saved in the database.
     * @param {DocumentBlockCreateManyAndReturnArgs} args - Arguments to create many DocumentBlocks.
     * @example
     * // Create many DocumentBlocks
     * const documentBlock = await prisma.documentBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DocumentBlocks and only return the `id`
     * const documentBlockWithIdOnly = await prisma.documentBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DocumentBlockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DocumentBlock.
     * @param {DocumentBlockDeleteArgs} args - Arguments to delete one DocumentBlock.
     * @example
     * // Delete one DocumentBlock
     * const DocumentBlock = await prisma.documentBlock.delete({
     *   where: {
     *     // ... filter to delete one DocumentBlock
     *   }
     * })
     *
     */
    delete<T extends DocumentBlockDeleteArgs>(args: Prisma.SelectSubset<T, DocumentBlockDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentBlockClient<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DocumentBlock.
     * @param {DocumentBlockUpdateArgs} args - Arguments to update one DocumentBlock.
     * @example
     * // Update one DocumentBlock
     * const documentBlock = await prisma.documentBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DocumentBlockUpdateArgs>(args: Prisma.SelectSubset<T, DocumentBlockUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentBlockClient<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DocumentBlocks.
     * @param {DocumentBlockDeleteManyArgs} args - Arguments to filter DocumentBlocks to delete.
     * @example
     * // Delete a few DocumentBlocks
     * const { count } = await prisma.documentBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DocumentBlockDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DocumentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentBlocks
     * const documentBlock = await prisma.documentBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DocumentBlockUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DocumentBlocks and returns the data updated in the database.
     * @param {DocumentBlockUpdateManyAndReturnArgs} args - Arguments to update many DocumentBlocks.
     * @example
     * // Update many DocumentBlocks
     * const documentBlock = await prisma.documentBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DocumentBlocks and only return the `id`
     * const documentBlockWithIdOnly = await prisma.documentBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DocumentBlockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DocumentBlock.
     * @param {DocumentBlockUpsertArgs} args - Arguments to update or create a DocumentBlock.
     * @example
     * // Update or create a DocumentBlock
     * const documentBlock = await prisma.documentBlock.upsert({
     *   create: {
     *     // ... data to create a DocumentBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentBlock we want to update
     *   }
     * })
     */
    upsert<T extends DocumentBlockUpsertArgs>(args: Prisma.SelectSubset<T, DocumentBlockUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentBlockClient<runtime.Types.Result.GetResult<Prisma.$DocumentBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DocumentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBlockCountArgs} args - Arguments to filter DocumentBlocks to count.
     * @example
     * // Count the number of DocumentBlocks
     * const count = await prisma.documentBlock.count({
     *   where: {
     *     // ... the filter for the DocumentBlocks we want to count
     *   }
     * })
    **/
    count<T extends DocumentBlockCountArgs>(args?: Prisma.Subset<T, DocumentBlockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentBlockCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DocumentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentBlockAggregateArgs>(args: Prisma.Subset<T, DocumentBlockAggregateArgs>): Prisma.PrismaPromise<GetDocumentBlockAggregateType<T>>;
    /**
     * Group by DocumentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends DocumentBlockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentBlockGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentBlockGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DocumentBlock model
     */
    readonly fields: DocumentBlockFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DocumentBlock.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DocumentBlockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    document<T extends Prisma.DocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the DocumentBlock model
 */
export interface DocumentBlockFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentBlock", 'String'>;
    readonly documentId: Prisma.FieldRef<"DocumentBlock", 'String'>;
    readonly type: Prisma.FieldRef<"DocumentBlock", 'String'>;
    readonly content: Prisma.FieldRef<"DocumentBlock", 'Json'>;
    readonly position: Prisma.FieldRef<"DocumentBlock", 'Int'>;
    readonly parentBlockId: Prisma.FieldRef<"DocumentBlock", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DocumentBlock", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DocumentBlock", 'DateTime'>;
}
/**
 * DocumentBlock findUnique
 */
export type DocumentBlockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBlock to fetch.
     */
    where: Prisma.DocumentBlockWhereUniqueInput;
};
/**
 * DocumentBlock findUniqueOrThrow
 */
export type DocumentBlockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBlock to fetch.
     */
    where: Prisma.DocumentBlockWhereUniqueInput;
};
/**
 * DocumentBlock findFirst
 */
export type DocumentBlockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBlock to fetch.
     */
    where?: Prisma.DocumentBlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentBlocks to fetch.
     */
    orderBy?: Prisma.DocumentBlockOrderByWithRelationInput | Prisma.DocumentBlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DocumentBlocks.
     */
    cursor?: Prisma.DocumentBlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentBlocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentBlocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DocumentBlocks.
     */
    distinct?: Prisma.DocumentBlockScalarFieldEnum | Prisma.DocumentBlockScalarFieldEnum[];
};
/**
 * DocumentBlock findFirstOrThrow
 */
export type DocumentBlockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBlock to fetch.
     */
    where?: Prisma.DocumentBlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentBlocks to fetch.
     */
    orderBy?: Prisma.DocumentBlockOrderByWithRelationInput | Prisma.DocumentBlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DocumentBlocks.
     */
    cursor?: Prisma.DocumentBlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentBlocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentBlocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DocumentBlocks.
     */
    distinct?: Prisma.DocumentBlockScalarFieldEnum | Prisma.DocumentBlockScalarFieldEnum[];
};
/**
 * DocumentBlock findMany
 */
export type DocumentBlockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBlocks to fetch.
     */
    where?: Prisma.DocumentBlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentBlocks to fetch.
     */
    orderBy?: Prisma.DocumentBlockOrderByWithRelationInput | Prisma.DocumentBlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DocumentBlocks.
     */
    cursor?: Prisma.DocumentBlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentBlocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentBlocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DocumentBlocks.
     */
    distinct?: Prisma.DocumentBlockScalarFieldEnum | Prisma.DocumentBlockScalarFieldEnum[];
};
/**
 * DocumentBlock create
 */
export type DocumentBlockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * The data needed to create a DocumentBlock.
     */
    data: Prisma.XOR<Prisma.DocumentBlockCreateInput, Prisma.DocumentBlockUncheckedCreateInput>;
};
/**
 * DocumentBlock createMany
 */
export type DocumentBlockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentBlocks.
     */
    data: Prisma.DocumentBlockCreateManyInput | Prisma.DocumentBlockCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DocumentBlock createManyAndReturn
 */
export type DocumentBlockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * The data used to create many DocumentBlocks.
     */
    data: Prisma.DocumentBlockCreateManyInput | Prisma.DocumentBlockCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DocumentBlock update
 */
export type DocumentBlockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * The data needed to update a DocumentBlock.
     */
    data: Prisma.XOR<Prisma.DocumentBlockUpdateInput, Prisma.DocumentBlockUncheckedUpdateInput>;
    /**
     * Choose, which DocumentBlock to update.
     */
    where: Prisma.DocumentBlockWhereUniqueInput;
};
/**
 * DocumentBlock updateMany
 */
export type DocumentBlockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentBlocks.
     */
    data: Prisma.XOR<Prisma.DocumentBlockUpdateManyMutationInput, Prisma.DocumentBlockUncheckedUpdateManyInput>;
    /**
     * Filter which DocumentBlocks to update
     */
    where?: Prisma.DocumentBlockWhereInput;
    /**
     * Limit how many DocumentBlocks to update.
     */
    limit?: number;
};
/**
 * DocumentBlock updateManyAndReturn
 */
export type DocumentBlockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * The data used to update DocumentBlocks.
     */
    data: Prisma.XOR<Prisma.DocumentBlockUpdateManyMutationInput, Prisma.DocumentBlockUncheckedUpdateManyInput>;
    /**
     * Filter which DocumentBlocks to update
     */
    where?: Prisma.DocumentBlockWhereInput;
    /**
     * Limit how many DocumentBlocks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DocumentBlock upsert
 */
export type DocumentBlockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * The filter to search for the DocumentBlock to update in case it exists.
     */
    where: Prisma.DocumentBlockWhereUniqueInput;
    /**
     * In case the DocumentBlock found by the `where` argument doesn't exist, create a new DocumentBlock with this data.
     */
    create: Prisma.XOR<Prisma.DocumentBlockCreateInput, Prisma.DocumentBlockUncheckedCreateInput>;
    /**
     * In case the DocumentBlock was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DocumentBlockUpdateInput, Prisma.DocumentBlockUncheckedUpdateInput>;
};
/**
 * DocumentBlock delete
 */
export type DocumentBlockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
    /**
     * Filter which DocumentBlock to delete.
     */
    where: Prisma.DocumentBlockWhereUniqueInput;
};
/**
 * DocumentBlock deleteMany
 */
export type DocumentBlockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentBlocks to delete
     */
    where?: Prisma.DocumentBlockWhereInput;
    /**
     * Limit how many DocumentBlocks to delete.
     */
    limit?: number;
};
/**
 * DocumentBlock without action
 */
export type DocumentBlockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBlock
     */
    select?: Prisma.DocumentBlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBlock
     */
    omit?: Prisma.DocumentBlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBlockInclude<ExtArgs> | null;
};
//# sourceMappingURL=DocumentBlock.d.ts.map