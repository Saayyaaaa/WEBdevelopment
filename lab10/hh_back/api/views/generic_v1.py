from rest_framework import mixins, generics

from ..models import Company
from ..serializers import CompanySerializer2


class CompanyList(mixins.ListModelMixin,
                   mixins.CreateModelMixin,
                   generics.GenericAPIView):

    queryset = Company.objects.all()
    serializer_class = CompanySerializer2

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class GetCompanyDetail(mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin,
                       mixins.DestroyModelMixin,
                       generics.GenericAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2

    def get(self, request, pk=None):
        return self.retrieve(request, pk)

    def put(self, request, pk=None):
        return self.update(request, pk)

    def delete(self, request, pk=None):
        return self.destroy(request, pk)