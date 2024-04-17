from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from ..models import Company, Vacancy
from ..serializers import CompanySerializer2, VacancySerializer2


class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2

    # permission_classes = (IsAuthenticated,)

    # def get_queryset(self):
    #     return Company.objects.filter(user=self.request.user)
    #
    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)


class GetCompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2
    # permission_classes = (IsAuthenticated,)


class VacanciesByCompanyList(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer2
    # permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     company_id = self.kwargs['company_id']
    #     return Vacancy.objects.filter(company_id=company_id)


class VacancyList(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer2


class GetVacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer2
